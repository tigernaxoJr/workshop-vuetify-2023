# 響應式狀態
## ref()
- ref 依賴跟蹤原理基於 getter、setter，所以取用時最後會加上一個 value：
  ```js
  // pseudo code, not actual implementation
  const myRef = {
    _value: 0,
    get value() {
      track()
      return this._value
    },
    set value(newValue) {
      this._value = newValue
      trigger()
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

## nextTick()
Vue 會收集 reactive state 的變更，然後一次性重新渲染 DOM，因此，當 reactive state 改變後，如果需要從 DOM 中獲取已更改的值，必須使用 `nextTick()`。`nextTick()` 返回一個 Promise，因此可以使用 `await` 進行等待。

## Reference
- [Vue.js-Reactivity Fundamentals](https://vuejs.org/guide/essentials/reactivity-fundamentals.html)
- [MDN-Proxy](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Proxy)