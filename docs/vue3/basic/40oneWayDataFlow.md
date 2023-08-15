# 單向資料流
https://vuejs.org/guide/components/props.html#one-way-data-flow
```js
const props = defineProps(['foo'])

// ❌ 不可直接變更 props!
props.foo = 'bar'
```
## Props 依賴變數
### 有修改需求：以 props 初始化
在 setup 裡面直接取用一次
```js
const props = defineProps(['initialCounter'])
const counter = ref(props.initialCounter)

```
### 沒有修改需求：使用 props 計算結果
使用 computed
```js
const props = defineProps(['size'])
const normalizedSize = computed(() => props.size.trim().toLowerCase())
```

## v-model 語法糖
使用事件觸發上游資料變更，不違反單向資料流實作 two-way binding 語法糖
:::code-group
```html [元件]
<CustomInput
  :modelValue="searchText"
  @update:modelValue="newValue => searchText = newValue"
/>
```
```html [v-model]
<input v-model="searchText" />
```
```html [input]
<!--input 在 vue 當中的地位比較特殊-->
<input
  :value="searchText"
  @input="searchText = $event.target.value"
/>
```
:::

這時候子元件長這樣，使用 getter, setter 讓 value 看起來可以像是直接修改(實際上遵循單向資料流)：
```html 
<!-- CustomInput.vue -->
<script setup>
import { computed } from 'vue'

const props = defineProps(['modelValue'])
const emit = defineEmits(['update:modelValue'])

const value = computed({
  get() {
    return props.modelValue
  },
  set(value) {
    emit('update:modelValue', value)
  }
})
</script>

<template>
  <input v-model="value" />
</template>
```
## 綁定多個 v-model 
父元件：
```html
<UserName
  v-model:first-name="first"
  v-model:last-name="last"
/>
```
子元件：
```html
<script setup>
defineProps({
  firstName: String,
  lastName: String
})

defineEmits(['update:firstName', 'update:lastName'])
</script>

<template>
  <input
    type="text"
    :value="firstName"
    @input="$emit('update:firstName', $event.target.value)"
  />
  <input
    type="text"
    :value="lastName"
    @input="$emit('update:lastName', $event.target.value)"
  />
</template>
```
## v-model modifiers
## Reference
- [Vue.js-Component v-model](https://vuejs.org/guide/components/v-model.html)