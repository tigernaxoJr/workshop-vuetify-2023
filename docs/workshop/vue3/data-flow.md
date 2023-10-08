# 單向資料流
https://vuejs.org/guide/components/props.html#one-way-data-flow
```js
const props = defineProps(['foo'])

// ❌ 不可直接變更 props!
props.foo = 'bar'
```
## Flux
Flux 是一種設計模式。這個概念由 Facebook 提出，最核心的思想就是確保資料在應用程序中的流動方向是單向的。以避免雙向資料流所可能帶來的維護問題。

![](/flux.png)

Flux 明確定義不同角色的職責和互動方式，幫助開發者更清晰地管理應用程序的狀態和資料流：
- ##### Action(動作)
  表示某個事件或操作，通常由使用者或系統事件觸發，用來更新應用程序的狀態，所有改變資料的動作必須在這裡被定義和觸發
- ##### Dispatcher(分發器)
  將目前發生的 Action 通知給所有已註冊的 Store。它充當一個中央管理器，確保 Actions 被適當地傳遞給相關的 Stores。
- ##### Store(資料儲存)
  每個 Store 存儲特定部分的應用程序狀態，重要的是，Store 是唯讀的，提供 getter 方法供 View 存取，只能通過 Actions 來修改它的狀態。
- ##### View(視圖)
  根據資料渲染使用者界面，同時它也監聽事件並將事件映射到適當的 Actions。當使用者與 View 互動時，View 會生成對應的 Action 來觸發相應的變更。

## 不修改 Props 
### 以 props 初始化後，在元件內部修改
在 setup 裡面直接取用一次，賦予 reactivity。
```js
const props = defineProps(['initialCounter'])
const counter = ref(props.initialCounter)

```
### 使用 props 計算結果，可跟蹤 props 變動
使用 computed
```js
const props = defineProps(['size'])
const normalizedSize = computed(() => props.size.trim().toLowerCase())
```

## 修改 Props 
為了不違反單向資料流，子元件不可直接修改父元件屬性，傳入屬性的父元件必須要監聽子元件事件以修改屬性：
:::code-group
```html [一般元件]
<CustomInput
  :modelValue="searchText"
  @update:modelValue="newValue => searchText = newValue"
/>
```
```html [input]
<!--input 在 vue 當中的地位比較特殊-->
<input
  :value="searchText"
  @input="searchText = $event.target.value"
/>
```
:::
### v-model 語法糖
一樣使用事件觸發上游資料變更，不違反單向資料流實作 two-way binding 語法糖
```html [v-model]
<input v-model="searchText" />
```

這時候子元件長這樣，使用 getter, setter 讓 value 看起來可以像是直接修改(實際上遵循單向資料流)：
```html 
<!-- CustomInput.vue -->
<template>
  <input v-model="model" />
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps(['modelValue'])
const emit = defineEmits(['update:modelValue'])

const model = computed({
  () => props.modelValue,
  (v) => emit('update:modelValue', v)
});
</script>
```
[試試看](https://play.vuejs.org/#eNp9UstO6zAQ/RVfb5JKTbpg11uQ7kVdwAIQIDaYRZVMiyGxLT9KpSj/zozTpCmPrpKZc2bmzPg0/J8x+TYAn/PFnyxjl8F5XV8pEzylWZZdCLXwUJtq5QH/GWsaVusSKta2FC5GJWybRehc8PgVnM2ofjZqgKErrDSeOfDBYEbWRlvPGmZhzVq2trpmCQ5PBmg8ooPz2RelSC60cn6v7ZyapUkyoendvAs+5d4haS03+ZvTCnduaAPBC10bWYG9NV5iE8HnLCKErapKf1zHnLcBpn2+eIXi/Yf8m9tRTvA7Cw7sFgQfML+yG/AdvHy4gR3+DyAKDxWyT4D34HQVSGNH+x9UibJHvKj2Kl5Nqs2jW+48KNcvRUKJ2Ua+4Hi3yxOrH+Se5WexTqgWr/jl9Ke8Y4/cgxF1XsjfzUIFI7tgGFPHlsHMYBp6u+ChPHbOvq6zhLHaOLRECWup4I6i9DmJQ59WFdJfJgcy1NIP3CUGxA2mRDnzbyWHst52vZy06bfFE6aT6G4frOrE5IdO9Bh7Jm6XbolKGtIfhk4Zwi3R28nf7lS9t9tPA4RMgA==)
## 綁定多個 v-model 
父元件：
```html
<script setup>
import UserName from './UserName.vue';
import { ref } from 'vue'

const first = ref('Peter')
const last = ref('Chen')
</script>

<template>
{{first}}, {{last}}
<UserName
  v-model:first-name="first"
  v-model:last-name="last"
/>
</template>
```
子元件：
```html
<template>
    <input type="text" v-model="firstName" />
    <input type="text" v-model="lastName" />
</template>

<script setup>
import { computed } from 'vue'
const props = defineProps({
    firstName: String,
    lastName: String
});

const emit = defineEmits(['update:firstName', 'update:lastName']);

const firstName = computed({
    get() { return props.firstName },
    set(e) { emit('update:firstName', e) }
});
const lastName = computed({
    get() { return props.lastName },
    set(e) { emit('update:lastName', e) }
});
```
[試試看](https://play.vuejs.org/#eNqVVMFu2zAM/RVBFzuA6xx6S90BW5HDduiCdTtNOxg2nbqzZUGSswyG/n2kHMnJVnTtJTD5HqlHPSoTf69UfhiBb3hhKt0qywzYUb0Tsu3VoC37ZkDflz2wRg89S/J1SFBZchN5E9PQMHeiESakkNUgjWVNq/H3lhhpsgMLOlkFrCsX6O4RJCHFetaCKjCw0KuutIARY9N06uZcRoEvd46gIko9XPVDDd3GM68kpm4F94HgEaTKgNE3Qms8oljH83jGrUGVTbvPn8wg8ZImOkjwauhV24H+rGyLUwi+YR4hrOy64dcnn7N6hCzkq0eofj6TfzJHygm+04ADHEDwiNlS7wGVEbx9uIcjfkcQxxg7ZL8AfgEzdCNpnGkfRlmj7DOeV/vRW9jK/VezPVqQJgxFQonpPF9wtPXuhdEXudf5ta8T0uEtnq8MbdriqJ5Li1aq0TL7W5Eb1o8SjArWUYPZo9cVkacXNWfOUuhTlzuPmbjNZPFoob5caWTMa6v0oAzubQ1NK2FHUToFZVHvhj1YjfeaBSSICgDl3eom6Jl7Q9/Sk5hbbzEw6fdkVDUqn1eaOiQZC7nQNPnxd6fIxnZhoEUmepWu/MO1o5bzSPlSgqafiHg9KRCTlKXPSUHUnc2yPO23HR4r/nd2HPmfo+N/B3d/ABxUqkY=)
<!-- ## v-model modifiers -->
## Reference
- [Vue.js-Component v-model](https://vuejs.org/guide/components/v-model.html)
- [Medium-深入淺出 Flux](https://medium.com/4cats-io/%E6%B7%B1%E5%85%A5%E6%B7%BA%E5%87%BA-flux-44a48c320e11)