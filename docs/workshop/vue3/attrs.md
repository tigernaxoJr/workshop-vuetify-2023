# 屬性綁定
## 命名規則
以 camelCase 命名的 props 在上層組件可以以 kebab-case(建議的方式) 或 camelCase 的命名方式傳遞 props。
::: code-group
```html [kebab-case]
<template>
  <my-component :greeting-message></my-component>
</template>
```
```html [camelCase]
<template>
  <my-component :greetingMessage></my-component>
</template>
```
:::

## 基本語法
綁定 html 屬性：
::: code-group
```html [使用 Directive]
<div v-bind:id="dynamicId"></div>
<a v-on:click="doSomething"> ... </a>
```
```html [簡寫]
<div :id="dynamicId"></div>
<a @click="doSomething"> ... </a>
```
:::
## 物件綁定
下面兩者等價：
::: code-group
```html {2} [個別綁定]
<template>
	<div :id="obj.id" :class="obj.class"></div>
</template>

<script setup>
const obj = { id: 'container', class: 'wrapper' }
</script>
```
```html {2} [物件綁定]
<template>
	<div v-bind="obj"></div>
</template>

<script setup>
const obj = { id: 'container', class: 'wrapper' }
</script>
```
:::
## 動態綁定
可依照不同情況將值綁定到不同屬性/事件：
```vue
<!--attrName, eventName 可以是表達式-->
<a :[attrName]="url"> ... </a>
<a @[eventName]="doSomething">
```
## Boolean 屬性
例如要判斷 disable 狀態，可以使用 boolean attributes，使用 [truthy value](https://developer.mozilla.org/en-US/docs/Glossary/Truthy) 條件判斷，但有**例外**：空字串視為 true。
```html
<button :disabled="isButtonDisabled">Button</button>
```
如果要判斷空字串為 false，最好的方法是先轉換成 true/false：
  - !'' (`true`)
  - !!'' (`false`)

## v-if/v-show
 - v-if：元件在屬性值為 true 才會渲染
 - v-show：元件渲染，在屬性值為 true 才會顯示
 ```vue
 <p v-if="seen">Now you see me</p>
 ```
## 
![](https://vuejs.org/assets/directive.69c37117.png)
[事件修飾符](https://vuejs.org/guide/essentials/event-handling.html#event-modifiers)
```vue
<form @submit.prevent="onSubmit">...</form>
```
[按鍵修飾符](https://vuejs.org/guide/essentials/event-handling.html#key-modifiers)
```
<input @keyup.enter="submit" />
<!-- Alt + Enter -->
<input @keyup.alt.enter="clear" />
```


## Reference
- [Vue.js-Template Syntax](https://vuejs.org/guide/essentials/template-syntax.html)
- [MDN-Truthy](https://developer.mozilla.org/en-US/docs/Glossary/Truthy)