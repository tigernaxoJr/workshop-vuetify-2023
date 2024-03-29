<!-- ---
layout: page
--- -->
# SFC (single file components)

Vue 建構的應用程式是由小元件組成的樹狀結構，開發者最常以`單一元件檔`定義單個元件。  

![](https://v2.vuejs.org/images/components.png)

`單一元件檔`以.vue 為副檔名，是用於組織 Vue 組件的一種文件結構。並允許將 HTML 模板、JavaScript 程式碼和 CSS 樣式組織在一個地方，易於閱讀、維護和複用。

SFC 由三個主要部分組成：

- 模板（`<template>`）（HTML）
- 腳本（`<script>`）、（Javascript）
- 樣式（`<style>`）、（CSS）

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

- Vue 組件的 HTML 部分  
- `<template>` 裡面可以有多個根元素 (Vue3.0) 
  ```html
  <template>
    <!-- 模板語法(Template Syntax) 使用 "Mustache" syntax 綁定變數達成 Text Interpolation -->
    <h1>{{ msg }}</h1>
    <input v-model="msg">
    <span>{{ count }}</span>
    <button @click="add">count++</button>
  </template>
  ```
- Mustache 裡面可以是 `Expression（表達式、求值式）`；不可以是 `Statement（敘述、語句）`
::: code-group
```js [可以]
a = 1 // 1 // Assignment Expression // 可讀性差
true ? 'yes': 'no' // 'yes'
`list-${'asdf'}` // 'list-...'
Date() // function 回傳的結果
message.split('').reverse().join('') 
```
```js [不可以]
var a = 1 // undefined
if(ok){return 'yes'}else{return 'no'}
```
```js [不是你想的那樣]
Date
```
:::


## 腳本
Vue 組件的 Javascript 部分  
- 在 `<script setup>` 中，頂層導入或聲明的變數和函數，可以自動在同一組件的模板中使用。
`<script setup>` 也支援 `top lovel await`。

```html
<script setup>
import { ref } from 'vue'

const count = ref(0)
const msg = ref('Hello World!')
const add = () => count.value++
</script>
```

## 樣式

Vue 組件的 CSS 部分  
style 內 CSS 預設作用範圍是全域，加入 scoped 屬性將作用範圍限制在 SFC 內。
lang 屬性套用想要的 CSS 預處理器，但要先 npm 安裝對應的 CSS 預處理器、loader，目前 playground 不支援。

```html
<style lang="SCSS" scoped>
  h1 {
    color: red;
  }
  button {
    background-color: #4caf50;
    color: white;
    border: none;
    border-radius: 0.2em;
  }
</style>
```

## Playground

來玩玩看吧
[Playground](https://play.vuejs.org/#eNqNUk2P0zAQ/SsmHLqrbpIuu1xKWhXQSsABECBx8SW1p623/pLttEVV/jtjJy3Z8iEubebNm5k3b3zMXltb7BrIplnlmRM2EA+hsXOqhbLGBXIkDlakJStnFBkhdUQ11cxoHwgzjQ5kFhlXk+sTqvy6x0bvQEpDvhsn+bPRmVBzjoSrazKbdy2KXS0bGI+prspOBc7HIICysg6AESHV5nZ+PKbubVuVGCVUaNsEssuV4SBnNMM8zbqUt7WOJZ3MWJSQlFs2IRhNFkwKtsUy1IRliTkeV2WXRmpVDkRg6MMPCcQzY4GnTptbcoz/BMdI46a4OH8VgTb+9GN6xrJm27XDGTzvyc/vWb16OUkF5w77jQjQQ0vjOCCmjX4K5a7movFTMilegDpNxBWjwHl2k3X3y1Vti0dvNF44qaB9wtNsetJFM7xrjGm2CcH6aVkyrrEMLRU7V2gIpbaqXCCtdGiRUJBzoxZ3xV1xX3LhwxAuwKt86czeg8MmNLsZjCkR3EX5oHELcP879qJsOPoi9dv43psWTQl4Ob0S6wtLmFFWSHCfbBD4RJ9YU+MT3n9IWHANnHdhG2DbP+CP/tDt9NlBUjbYP9RuDaFLP3z9CAf8PifxBTeyP8Nfkl/AG9lEjR3tDT4llD3gJbXv04WFXn/zD4cA2p+WikKTG4mf7vH2H6v/kotun11sfwIsXmkY)

## Summary
- Vue 撰寫最常見元件檔案是單一元件檔(SFC; Single File Component)。
- 單一元件檔由 `<template>`、`<script.`、`<style>` 三個部分組成。
- `<template>` 當中可以用鬍子語法(Mustache syntax)綁定表達式、響應性狀態。
- `<script setup>` 直接撰寫元件 setup() 的部分
  - 頂層導入或聲明的變數和函數，可以自動在同一組件的模板中使用。
  - 支援 `top level await`。
- `<style lang="scss">` 可以選擇以 SCSS 撰寫樣式。
- 求值式/表達式(`Expression`)與敘述句(`Statement`)不同。

## Reference
- [Vue.js-Template Syntax](https://vuejs.org/guide/essentials/template-syntax.html)
- [2020it 邦鐵人賽-30 天手把手的 Vue.js 教學 Day15 - 認識 Single file components(SFC)](https://ithelp.ithome.com.tw/articles/10245406)