# 元件溝通 (Props)


## Props
### Props 宣告
使用 `defineProps()` 宣告 Props，定義 props 的名稱和型別，撰寫型別是讓程式易懂，也可以讓組件使用者知道傳遞的型別是否正確。
::: code-group
```html [JS]
<script setup>
defineProps({
  title: String,
  greetingMessage: String,
  likes: Number
})
</script>
```

```html [Typescript]
<script setup lang="ts">
defineProps<{
  title?: string
  greetingMessage?: String,
  likes?: number
}>()
</script>
```
:::
### 屬性綁定
命名規則以 camelCase 命名的 props 在上層組件可以以 kebab-case(建議的方式) 或 camelCase 的命名方式傳遞 props。
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

### Mutating Object / Array Props
### Props 驗證
### Boolean Casting
## todo
event/props
預設值
自訂驗證
綁定 object ref 子元件直接賦值的資料汙染
## v-model
## v-bind、$attrs
自動解構，$attrs 代表父元件全部綁定的屬性
### v-bind BJ4
兩個是等價的程式
```html
<BlogPost v-bind="post" />
```
```html
<BlogPost :id="post.id" :title="post.title" />
```
## 單向資料流
https://vuejs.org/guide/components/props.html#one-way-data-flow
```js
const props = defineProps(['foo'])

// ❌ 不可直接變更 props!
props.foo = 'bar'
```

### props 作為初始值
在 setup 裡面直接取用一次
```js
const props = defineProps(['initialCounter'])
const counter = ref(props.initialCounter)

```
### 使用 props 計算結果
應該使用 computed
```js
const props = defineProps(['size'])
const normalizedSize = computed(() => props.size.trim().toLowerCase())
```

## Reference
- [Vue.js-Props](https://vuejs.org/guide/components/props.html#props-declaration)