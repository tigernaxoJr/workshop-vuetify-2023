# 響應式狀態
在 MVVM 架構下，Model 需要具有響應性，才能讓 ViewModel 自動更新視圖。響應性是指 Model 的狀態變化會自動通知 ViewModel，ViewModel 才能根據 Model 的最新狀態更新視圖。

## ref()
- ref 依賴跟蹤原理基於 getter、setter，所以取用時最後會加上一個 value，這是官方給的示意程式碼 (非實作)：
  ```js
  // pseudo code, not actual implementation
  const myRef = {
    _value: 0,
    get value() {
      track() // track: 加入觀察者
      return this._value
    },
    set value(newValue) {
      this._value = newValue
      trigger() // trigger: 通知觀察者
    }
  }
  ```
- template 裡面取用 ref 會自動解包(unwrap)，不需要使用 .value
  ```vue
  <template>
    <!-- template 裡面取用 ref 會自動解包(unwrap)，不需要使用 .value -->
    <div>{{ count }}</div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  const count = ref(0)
  
  console.log(count) // { value: 0 }
  console.log(count.value) // 0
  
  count.value++
  console.log(count.value) // 1
  </script>
  ```
### 以觀察者模式理解
我們可以透過不到短短50行的程式碼[實作](https://playcode.io/1605775)模擬簡單的 MVVM（Model-View-ViewModel）架構 ref，幫助我們理解：
```js:line-numbers
// vue 透過類似機制宣告為響應式狀態
class Ref {
  constructor(value) {
    Ref.target = null;
    this.dep = []; // 存儲所有觀察者的清單

    let _value = value;
    // 新增觀察者
    const track = () => Ref.target && this.dep.push(Ref.target); 
    // 通知所有觀察者更新
    const trigger = () => this.dep.forEach(dep => dep.update()); 
    // 回傳響應式狀態
    return Object.defineProperty({}, 'value', {
      get() {
        track();
        return _value;
      },
      set(newValue) {
        _value = newValue;
        trigger();
      },
    });
  }
}

const ref = value => new Ref(value);

// 觀察者，模板綁定響應式資料透過類似的機制獲得更新
class Watcher {
  constructor(template, item = {}) {
    this.template = template;
    this.ref = item;
    Object.keys(item).forEach(ref => {
      Ref.target = this;
      const _ = item[ref].value; // 將自己添加到觀察者清單
      Ref.target = null;
    });
  }
  update() {
    // 替換模板中的變數
    const el = this.template.replace(
      /\{\{\s*([a-zA-Z]+)\s*\}\}/g, 
      (match, key) => this.ref[key]?.value || match
    );
    console.log(el);
  }
}
```
測試看看：
```js
// vue 透過類似機制宣告為響應式狀態
let count = ref(0);
let message = ref('message');
// 模板綁定響應式資料透過類似的機制獲得更新
const template = '<div>{{count}} ({{message}})</div>';
new Watcher(template, { count, message });
```



### shallowRef()
Deep Reactivity：ref 預設會跟蹤其內部的所有對象，如果不是基本(privative)數據類型，它會自動使用 reactive() 來將對象轉換為代理(proxy)。
淺層(Shallow) refs：用於改進性能（當您不希望跟蹤 ref 下的大型對象時），或是 ref 內部對象的狀態由外部函數庫管理。
```js
const state = shallowRef({ count: 1 })
state.value.count = 2 // 無反應
state.value = { count: 2 } // 有反應
```

## reactive()
- 原理是 javascript proxy。
- 只能包裝物件(object, Array, Map/Set ...)，不能包裝基本數據類型。
- 使用時不需要加 .value。
```vue
<template>
  <button @click="state.count++">
    {{ state.count }}
  </button>
</template>

<script setup>
  import { reactive } from 'vue';
  const state = reactive({ count: 0 });
  console.log(state.count) // 0
</script>
```

### [試試看](https://play.vuejs.org/#eNqNUU1P3DAQ/SsjXwDBxkj0tF3QthWH9tBWbY+5BGdYDP6SPVlWivLfO3YghOVD3Ox5b+a9edOLLyFU2w7FUqwIbTAN4UXtAFZXHZF3sFZGq7vzWiRiqFK+c3R8XItCAuh7mAEwDKVXjs3MWcnZVP4mFXUgSEhdKCO0DT4S9BCxUaS3CANcR2/hgF0dfM4U5V3iliwD5xPvsGeANZdwCsPRRPQGK+M3hzNXRyAlnGYvo/qFOBGj7MI2obpN3vH6fZ5QPwCpFksolVxjJ/lfixuikJZSqtZxW4tGb2PlkKQLVq6ZJiPraYuL1tv1WXVWfZKtTjQvV5js4ir6+4SRh9TiZCYjubjFuIjoWowYPyq71zaX3oNeyGd1vtrAoVDiBK/1Zi8S5W3QBuOvQJoTfhZNY4y//1FqFDucdlE3qO5eqd+m3bjT74jF2Wx/auIGaYQv//7EHb8n0Pq2Mw9neAP8g3z9LnscaV8717LtGa+4/V4urN3mX7rcEbr0uFQ2WtIo/HKPb++s/mSX055SHP4D1Xge7g==)
### shallowReactive()
同 shallwRef()

## 常犯的錯誤
- 直接把變數指向其他響應式數據(以為更改響應式數據內容)
```js
let state = reactive({ count: 0 })
// state 現在指向 reactive({ count: 1 }) 這個 proxy
state = reactive({ count: 1 })
// 現在沒有變數指向 reactive({ count: 0 }) 這個 proxy
```
- 解構賦值(destructure)的內容失去響應性 
```js
const state = reactive({ count: 0 })
// count 現在就只是一個初級資料結構，沒有響應性
let { count } = state
// 不會影響到 state.count
count++
```
### [試看看](https://play.vuejs.org/#eNqNUsFu00AQ/ZWRL23VxqYqp5BUhaoHOAACjr649jTd1N61dtdpUBQJCSSEaFFB4gKRQLSip0qUXhBQ8TO1W/6CsdcJTkiBk70z7+2892Z71vU4tjsJWnWroTGKQ0/jsssBGuuJ1oLDih8yf6vpWkKyFuO2LxKu5+ddaxl6PVCa8KYG/T40HMOafgPjHS9kwWp+zPnV8z+o48TptIZTMUBH5UsWa1Cok5gqLIqF1NADiZ6vWQehDxtSRDBD9meu5RTHAex6dAfWjbMFMK4h23ma7r08+7Kb7u2cv3kyvIPphxB42iuo6dv32dFByRjmBOmn3bGUss+vssGz9PT457sfLg+RBOZdaI50zfaggNbhCvTnSFgOKnU0Ddrll5MWDckXXIkQ7VC0ZgvwHJDGKqp0nAus2BHrbfQ1XBzuZ4fPL04+po++Z4PH6cFx+uJbBWcG6PEdNmF2Dpr0MPId5qrLcZT0SDiUpWb5nYdFl5MWUpId7Z9/+Erxnp0OspPXwxFTBlQCpadImze7XrYWLLPmWuTFdlsJTu+6UEOvr2go16obfXmNNp+fXWtT61jVHccPONECDFlH2hy1w+PIWSGYI2kWi7AWiGhlyV6yrzoBU7patlFFtXUpthVKusS1FipjHCp2UNYk8gAlyv8dO0Grjp5o/TE+n07B9ikUrSjKDdaaiMQXUcxClHdizSjqsWi8MBTbt4qalgmOvPib6G9NqbdV13i6K7FQVvGvPdlCbdpr929jl/5HzUgESViu4ZLmPaSnnOQaDexGwgOSXcEVam8WG2a89UCtdTVyNTSVCy3SKPDFPlb/Yv23XEp7lGL/F5BV33c=)
## nextTick()
Vue 會收集 reactive state 的變更，然後一次性重新渲染 DOM，因此，當 reactive state 改變後，如果需要從 DOM 中獲取已更改的值，必須使用 `nextTick()`。`nextTick()` 返回一個 Promise，因此可以使用 `await` 進行等待。

### [試試看](https://play.vuejs.org/#eNqNU8tu00AU/ZWRhdRETWyksgpJFKi6gAUgqFh5UWd8k047nhnNXCdBlndsWPAD8A/8FepvcGfGSU14tLu5577OucdukhfGpJsakkkyRaiMLBDmuWJsuqwRtWIWVrM8WaLKE7bgUvBbChEc5smcNQ1zSB0p17VC1rZsmsU+mjHNegMpdNwKg8wB1oYQURltkTVMwQ4vae6IdhUcxQb8a8VatrK6YifE7uS5n8C1csiICpv5goGqpRzmSgIN9SwCHCcMGhYoTdhT1g6pO/Z63lRVuE+Ks8GQzUiCF9sTcXrqgVjeDSEms1hynyp19bGQhBOddFPIGlIkHedaISj0dcW2EHgQNyCivd43BD/UL8Hi4Oru+4+fX77effu8F/SkCY92tOfgofiMWDe7g7uovSICrTcl2jBPRkl0YFwVJr1xWtEnEI6RdwmXJ5N4Ho+RCz7Ok2tE4yZZxktFbSVIsbGpAsyUqbIFlWWW6IkKxrR9cZaepc+yUjjswym4ary0euvA0pA8GfXWZARuwI4tqBIs2MeuPWrrrz5K/bHeb6fjtHQUdGTSSqyPTsJ1ZQQ58tagIBN/O00hpd6+DhjaGg5a+DXw27/gN24XNb2zEJj19GNh10D/lk9ffPDm9ZKVLmvZ2fCP5HtwWtaeYyx7WauSaPfqAttXwWGh1pfuYkdfnNuL8kTDNUJ98OP8P9Lv6dK1D1dsfwG98X8V)

## Reference
- [Vue.js-Reactivity Fundamentals](https://vuejs.org/guide/essentials/reactivity-fundamentals.html)
- [MDN-Proxy](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Proxy)