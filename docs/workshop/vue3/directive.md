# 指示詞 (Directive)
先介紹比較常用的
## v-if/v-show
- `v-if`：條件成立才渲染。
- `v-show`：一律渲染，條件成立才顯示。
### v-else/v-else-if
```html
<div v-if="type === 'A'"> A </div>
<div v-else-if="type === 'B'"> B </div>
<div v-else-if="type === 'C'"> C </div>
<div v-else> Not A/B/C </div>
```
## v-for
用來做清單渲染
```html
<div v-for="item in items" :key="item.id">
  {{ item.text }}
</div>
```
## v-bind/v-on
- `v-bind`: 屬性綁定，縮寫為 `:`(見元件屬性綁定)。
- `v-on`: 事件綁定，縮寫為 `@`。
  ```html
  <button v-on:click="onClick"></button>
  ```
## v-model
雙向綁定語法糖
```vue
<template>
  <!-- 兩者等價 -->
  <MyComponent :modelValue="count" @update:modelValue="count=$event" />
  <MyComponent v-model="count" />
</template>
<script setup>
import { ref } from 'vue';
const count = ref(0);
</script>
```
## v-slot
用於指定具名插槽、從作用域插槽獲取屬性。
```html
<!-- 具名插槽 -->
<BaseLayout>
  <template v-slot:header>
    頁首內容
  </template>

  <template v-slot:default>
    預設插槽內容
  </template>

  <template v-slot:footer>
    頁尾內容
  </template>
</BaseLayout>

<!-- 具名插槽接收屬性 -->
<InfiniteScroll>
  <template v-slot:item="slotProps">
    <div class="item">
      {{ slotProps.item.text }}
    </div>
  </template>
</InfiniteScroll>

<!-- 預設插槽接收屬性，並使用解構賦值 -->
<Mouse v-slot="{ x, y }">
  滑鼠位置: {{ x }}, {{ y }}
</Mouse>
```
## Reference
- [Vue.js-Built-in Directives](https://vuejs.org/api/built-in-directives.html)