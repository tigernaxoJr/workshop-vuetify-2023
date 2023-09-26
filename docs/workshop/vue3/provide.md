# 元件溝通 (Provide-Inject)
## Props
在父元件綁定屬性給子元件後，子元件內還需要宣告 Props，才能取用綁定的屬性。
### defineProps
使用 `defineProps()` 宣告 Props，定義 props 的名稱、型別，撰寫型別是讓程式易懂，也可以讓組件使用者知道傳遞的型別是否正確。
::: code-group
```html [JS]
<script setup>
const props = defineProps({
  title: String,
  greetingMessage: String,
  likes: Number,
  abc: {
	type: String,
	required: true,
	default: '123', // 可以是表達式
	// 可以自訂驗證
	validator:() => ['success', 'warning', 'danger'].includes(value)
  }
})
</script>
```

```html [Typescript]
<script setup lang="ts">
const props = defineProps<{
  title?: string
  greetingMessage?: String,
  likes?: number,
  abc: {
	type: String,
	required: true,
	default: '123', // 可以是表達式
	// 可以自訂驗證
	validator:() => ['success', 'warning', 'danger'].includes(value)
  }
}>()
</script>
```
:::

## Emits
```html [JS]
<template>
  <button @click="buttonClick('payload')">onclick</button>
  <button @click="$emit('submit', 'payload')">onclick</button>
</template>

<script setup>
const emit = defineEmits(['submit'])
const buttonClick = (e) => {
  const payload = e
  emit('submit', payload)
}
</script>
```

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
## provide
如果只用 props 需要傳遞好幾次:
![](https://vuejs.org/assets/prop-drilling.11201220.png)
使用 provide/inject:
![](https://vuejs.org/assets/provide-inject.3e0505e4.png)

### 使用方法

- 上層元件使用 provide 提供；內層元件使用 inject 接。
- reactive state 可以被 provide。
  provide:

```vue
<script setup>
import { ref, provide } from 'vue';

const count = ref(0);
// 可以 provide 任何種類，字串、數字、物件... etc
provide(/* key */ 'message', /* value */ 'hello!');
// 可以 provide reactive state
provide('key', count);
// 可以宣告為 readonly
provide('read-only-count', readonly(count));
</script>
```

inject:

```vue
<script setup>
import { inject } from 'vue';

// 直接注入
const value = inject('message');
// 可以有預設值
const withDefaultValue = inject('message', 'default value');
// 可以從 function 計算出預設值
const withFactorFunction = inject('key', () => new ExpensiveClass(), true);
</script>
```

### Working with Reactivity
- 使用 provided state 和 mutations function 保持 reactivity。
- 應盡量把 provided state 和 mutations function 集中在同一個處，易於維護(高內聚性)，範例：

```vue
<!-- provider component -->
<script setup>
import { provide, ref } from 'vue';

const location = ref('North Pole');

function updateLocation() {
  location.value = 'South Pole';
}

provide('location', {
  location,
  updateLocation,
});
</script>
```

```vue
<!-- injector component -->
<template>
  <button @click="updateLocation">{{ location }}</button>
</template>

<script setup>
import { inject } from 'vue';

const { location, updateLocation } = inject('location');
</script>
```

## Reference

- [Vue.js-Provide / Inject](https://vuejs.org/guide/components/provide-inject.html)
