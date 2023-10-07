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

## 玩玩看
[Playground](https://play.vuejs.org/#eNqNVM1u00AQfpWtOTiR6hgoXExaFaoe4AAIevTF9m7STe3d1e7aLYoi8XcpcIADCAriikCoCFWqRIG3aZNy4hUYr+3UcSniNjt/3zffjD20rgrRyVJieVZXk0TEgSZLPkOoi2lmDDApE6lGmZNwTOJF36LYt5bQr7dvjp6/mOw/ONrdaR1/ej/eeznZe9X20HCIKEajkWnjFn2MPec4R18/j+9/KIocZ4oEzUPKsEdx1b7pqBqV+bXM0zlN/oB7ePD08Pt+SbZ4jF9/mWx/G+8+mew8Lmj9/vFsOYpptIHG7x4d/9yePDxAHmcrxtUu6UK/MNWaM+DMmWfyAZ8zY+XCnPhh/CK3UVmgzFaVyGdUVDRma6bkZqqaMpTi5qXhAMom2x+nWpwhGaYqCGOCq917lQOazM0Z2etIXbd2O/BUkaRCI0V0KsBDE8GlRkPEyJZeA77zSJIg0jQjudVDI9STPEE2HKJ9xWcRZ0rnN7SYR1u2wj27XbnL8SHWaqPFJRTEROqWfeHiQi0nHEB8mFOk2EO2JkpTbM/njigOlAJfgEIU2T6DM+26BeGSvL4X53OcC4QAIbKiT8glJtKRAaYplJ/vXCYJUIVAEG30JU8ZdiIec+mhkNA+MTERYExZ30MXyuQkkH3KqncBbeCseatQyUkC0RkozuCLNMBw2iagfAs+rWI9vgVK5W/fWtdaKM91I8ygDL5PmskOI9plInGXIc2VKdM0IQ7myfJCZ6FzCZamdN3dISpxQsk3FZHQxLeMUCWMC84sn5wwEIDI/4VtlNWhG6FT8Dk6aDMCUbSCjfZovyFJxBNBYfG3hKaw8RlpgjjmmzeMT8uUTGeJ1km08Rf/QG0VM92WxDCrza9hX0QX4dW7N+F8a0H4HaZxuYYzgneI4nGacyzSrsGZAO1anmF73WwYLmVNrW5pwlQ1VE7UqGHyzT5W/jH6CV1Qe6ri6A8+lxXj)

## Summary
- 綁定的屬性或事件，命名方式為 kebab-case(建議) 或 camelCase。
- 事件綁定是`v-on:[事件名稱]`語法糖 `@[事件名稱]`。
- 屬性綁定是`v-bind:[屬性名稱]`語法糖 `:[屬性名稱]`。
- 綁定屬性`:onClick`效果和`@click`相同，事件也是屬性的一種。
- 單純使用 `v-bind` 是物件綁定，綁定物件下的所有屬性。

## Reference
- [Vue.js-Template Syntax](https://vuejs.org/guide/essentials/template-syntax.html)
- [MDN-Truthy](https://developer.mozilla.org/en-US/docs/Glossary/Truthy)
- [Vue.js-Props](https://vuejs.org/guide/components/props.html#props-declaration)