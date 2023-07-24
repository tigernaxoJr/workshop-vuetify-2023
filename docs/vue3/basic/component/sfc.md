<!-- ---
layout: page
--- -->

# SFC (single file components)

以.vue 為副檔名，用於組織 Vue 組件的一種文件結構。並允許將 HTML 模板、JavaScript 程式碼和 CSS 樣式組織在一個地方，易於閱讀、維護和複用。

SFC 由三個主要部分組成：

- 模板（`<Template>`）（HTML）
- 腳本（`<Script>`）、（Javascript）
- 樣式（`<Style>`）、（CSS）

結構會像這樣：

```html
<template>
  <!--HTML-->
</template>

<script>
  // JAvaScript
</script>

<style>
  /*CSS*/
</style>
```

## 模板

Vue 組件的 HTML 部分  
Vue3.0 開始 `<template>` 裡面可以有多個根元素

```html
<template>
  <div>
    <h1>{{ message }}</h1>
    <button @click="incrementCounter">Click me</button>
  </div>
</template>
```

## 腳本

Vue 組件的 Javascript 部分  
使用 `<script setup>`讓宣告的變數作為成員，自動 return 給 template 取用。

```html
<script setup>
  import { ref } from 'vue';
  const message = ref('Hello, Vue!');
  const counter = ref(0);
  function incrementCounter() {
    counter.value++;
  }
</script>
```

## 樣式

Vue 組件的 CSS 部分  
style 內 CSS 預設作用範圍是全域，加入 scoped 屬性將作用範圍限制在 SFC 內。
lang 屬性套用想要的 CSS 預處理器，但要先 npm 安裝對應的 CSS 預處理器、loader。

```html
<style lang="SCSS" scoped>
  h1 {
    color: blue;
  }

  button {
    background-color: #4caf50;
    color: white;
  }
</style>
```
## 插槽(slot)
###  具名插槽
###  匿名插槽
scoped slot?
## 組件溝通
### event/props
資料類型檢查
預設值
自訂驗證
綁定 object ref 子元件直接賦值的資料汙染
### v-model
單向綁定/雙向綁定語法糖
### provide/inject
## 遞迴元件
Recursive Component
## 動態元件
通常會直接用 render function
## Reference

- [2020it 邦鐵人賽-30 天手把手的 Vue.js 教學 Day15 - 認識 Single file components(SFC)](https://ithelp.ithome.com.tw/articles/10245406)
