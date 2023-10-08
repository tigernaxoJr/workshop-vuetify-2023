# 元件溝通 
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
	default: 'success', // 可以是表達式
	// 可以自訂驗證
	validator:(value) => ['success', 'warning', 'danger'].includes(value)
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
	default: 'success', // 可以是表達式
	// 可以自訂驗證
	validator:(value) => ['success', 'warning', 'danger'].includes(value)
  }
}>()
</script>
```
:::

[試試看](https://play.vuejs.org/#eNqdVVtvG1UQ/itH+2JHxLtU5ck4VrjkoTyUiiJe6j6sd8fuNrtnV+fipFiWUqBACVJbqRI08EBVQAmorXggqmgof8Yb20/8hc6c9V7sJFXVSJH3zMyZ+eabyxla7yWJPdBgNa2WgigJXQXtDmes5QeD9uTbw/SvX9NbX46fH072vkp3jv4/2hsOmRdrrtho1HLIyph/EEcJUzcSWOtYUnseSNmxWOh2IURJ+vhu5uV4/8Hs4feoGTSi2Dc646xjtVsO+UBvLaeCBI/SE0GimASlSR1ESSwUGzIBPTZiPRFHrIYp1N4tdAZMprCNV0qR9F7MpZrDXyMH9bdXKGAWom2tWpmHRuQm9nUZc+RlSPl15gpMqsmMhGTolc4d65pSiWw6judzvIZ5BQNhc1AOTyJnHc0cgSGDCBp+HK2ft8/b7yB1UlXFNsio0RXxlgSBTjrWaiWMg8IBiIYA7oMA8bphl65VQy+pToSn6KMOHyEpSiJxvaC/RImHzAYhiI8TFSCxC9S4YRhvfWRkSmgocvGugbd5ivy63M5yuiTAIKvkr1zRB2wRUm9cvgjb+F0osY10OC/DGcpPQMahJoyZ2fua+wi7YmfQXjAVDnj/U7mxrYDLPCkCatgw9qYe1FRnpV7CRbYrLOaNiAR2BHZd2eV4oqs0c8wLXSlxLEQc01Tkuly/IDDCbhsn0gyamcjuSQuZuLzN0MqM3GduqAFNGbY9KRYiZANdlXS1UjFn614YeJuIK+CeAFci4+0L808MaoxefdGH4uKH88/TLxKEVsATrSpbYkCocW/MVwzXUZcqeAb6gtFCUl0qdFxcKigp1gp1tVbgL+0WNHEclog4kSx98ii99x2JsoWSSdeYD72AwyU61Yc5BlOaJrusBLbWai4tS0GdU0mCEmyyiya/wpr+0LmrQ9Vk51gD/xFMeufp+Plvxz8+nT7cn928nx7dye2xU+dfmbtTIizhWYhQm2/w2oIaSxD4ropFk9VNOVbYWptdKY1ZbcsVHL3Sp+/yPojaVRsbJtQ+yPxOAXz6zR/T/S9mBz9MH98ugNPHaGXO9vifXXwzltmGKFAl2xt0ql+p6QSxQbPktXY1dzN99O9s55fxs510Z5elzw6Pf77NcEIVEkwNgL8MX7ey8Me7/41ffD376UF6997k8Gb6ZK8MbpLA4LlxWWf0WF8xz5LSgmc9YVcnriATY9aRiGGWSf0U6KsM9YtcIIrJi4P01gEl0dPcY5O/f2d5UyOlf07u75c48zFFqIgK6/SKWCegvsXOmbCZq3xw38gVtqpxVbyx+Xi2pLoRAsOXJQHfSG1aeWWrdl1vsy/wqfYbXhxS17mfawFmEkmfuL6PvYbzAFEh7MYCX7OGcP1Ay1JlqEQIFLJtjV4CzoUyvA==)

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

[試試看](https://play.vuejs.org/#eNqdVVtvG1UQ/itH+2JHxLtU5ck4VrjkoTyUiiJe6j6sd8fuNrtnV+fipFiWUqBACVJbqRI08EBVQAmorXggqmgof8Yb20/8hc6c9V7sJFXVSJH3zMyZ+eabyxla7yWJPdBgNa2WgigJXQXtDmes5QeD9uTbw/SvX9NbX46fH072vkp3jv4/2hsOmRdrrtho1HLIyph/EEcJUzcSWOtYUnseSNmxWOh2IURJ+vhu5uV4/8Hs4feoGTSi2Dc646xjtVsO+UBvLaeCBI/SE0GimASlSR1ESSwUGzIBPTZiPRFHrIYp1N4tdAZMprCNV0qR9F7MpZrDXyMH9bdXKGAWom2tWpmHRuQm9nUZc+RlSPl15gpMqsmMhGTolc4d65pSiWw6judzvIZ5BQNhc1AOTyJnHc0cgSGDCBp+HK2ft8/b7yB1UlXFNsio0RXxlgSBTjrWaiWMg8IBiIYA7oMA8bphl65VQy+pToSn6KMOHyEpSiJxvaC/RImHzAYhiI8TFSCxC9S4YRhvfWRkSmgocvGugbd5ivy63M5yuiTAIKvkr1zRB2wRUm9cvgjb+F0osY10OC/DGcpPQMahJoyZ2fua+wi7YmfQXjAVDnj/U7mxrYDLPCkCatgw9qYe1FRnpV7CRbYrLOaNiAR2BHZd2eV4oqs0c8wLXSlxLEQc01Tkuly/IDDCbhsn0gyamcjuSQuZuLzN0MqM3GduqAFNGbY9KRYiZANdlXS1UjFn614YeJuIK+CeAFci4+0L808MaoxefdGH4uKH88/TLxKEVsATrSpbYkCocW/MVwzXUZcqeAb6gtFCUl0qdFxcKigp1gp1tVbgL+0WNHEclog4kSx98ii99x2JsoWSSdeYD72AwyU61Yc5BlOaJrusBLbWai4tS0GdU0mCEmyyiya/wpr+0LmrQ9Vk51gD/xFMeufp+Plvxz8+nT7cn928nx7dye2xU+dfmbtTIizhWYhQm2/w2oIaSxD4ropFk9VNOVbYWptdKY1ZbcsVHL3Sp+/yPojaVRsbJtQ+yPxOAXz6zR/T/S9mBz9MH98ugNPHaGXO9vifXXwzltmGKFAl2xt0ql+p6QSxQbPktXY1dzN99O9s55fxs510Z5elzw6Pf77NcEIVEkwNgL8MX7ey8Me7/41ffD376UF6997k8Gb6ZK8MbpLA4LlxWWf0WF8xz5LSgmc9YVcnriATY9aRiGGWSf0U6KsM9YtcIIrJi4P01gEl0dPcY5O/f2d5UyOlf07u75c48zFFqIgK6/SKWCegvsXOmbCZq3xw38gVtqpxVbyx+Xi2pLoRAsOXJQHfSG1aeWWrdl1vsy/wqfYbXhxS17mfawFmEkmfuL6PvYbzAFEh7MYCX7OGcP1Ay1JlqEQIFLJtjV4CzoUyvA==)

### 事件修飾符
![](https://vuejs.org/assets/directive.69c37117.png)
```vue
<template>
  <!-- 點擊事件的傳播將被停止 --> 
  <a @click.stop="doit"></a>
  <!-- 提交事件將不再重新加載頁面 -->
  <form @submit.prevent="doit"></form>
  <!-- 可以鏈接修飾符 --> 
  <a @click.stop.prevent="doit"></a>
  <!-- 只有修飾符 -->
  <form @submit.prevent></form>
  <!-- 只有當 event.target 是元素本身時才觸發處理程序 --> 
  <!-- 也就是說不理會來自子元素冒泡的事件 -->
  <div @click.self="doit"></div>
</template>
```

### 按鍵修飾符
任何來自[KeyboardEvent.key](https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key/Key_Values)的 key name 都可以作為修飾符，但要轉換為 kebab-case 的形式。
```vue
<template>
  <!-- 只有當 key 是 Enter 時才調用 submit --> 
  <input @keyup.enter="submit" />
  <!-- Alt + Enter 組合 -->
  <input @keyup.alt.enter="clear" />
  <!-- PageDown 轉為 kebab-case 可作為修飾符 -->
  <input @keyup.page-down="onPageDown" />
</template>
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
[試看看](https://play.vuejs.org/#eNqtVL1y00AQfpVDjZOxJYFDZRxPgEkBBTBAqUY+bZxLpLvL3ckJ41EFmaGiYihSk6GmSQOPQ5KSV2DvTpZlBzPApLJvf779dlffzoKHUkbTEoJBMDRQyDw1MEo4IcOMTUfX55+u319cnr798e2CSCWmLANyffaOUFFy8/P72Wzm/5KqGsY2w6U+FoW8NxrG/jfhw7gFjU9NFZOGaDClRAsrpFCGzOYVekTBHqnInhIF6SC5zoMmyEHWnsgXsPRtBBVcm5rOtoXYuLs5tzJOFaQa0LGxSbZHPiyapnkJ3e48KoP1UWGY8JrfRody0+khYefvNei9BUKFpYexb3QU9AJPPyxSGR1owXHcMzuqpHboJBgQZ7E2bMi+k2DfGKkHcUwzjmkZ5GyqIg4m5rKIdzAsVkiAFRBmotjZirai+7gFbdrmCHQRjpU41qAQJAl6rTIxGqegQgU8AwXqb8uupLVLr7hulLfVq4RXOBSjce57bLIyEopbZTmo59Iw3MvSaNI8F8dPnc2oEppe6D7Qw9/YD/SJ7+mFAses1b9J1QSMd+++egYn+L9xFiIr83oNa5wvQYu8tBx92KOSZ0i7FefYPnEbZnzyWu+eGOB63pQl6qbh4t0+7Ae9rvUFXZx2a4qNCHCCicLPbiE2fNlcq2VC81Tr7SRQQiBI43N+C9GvBdtfpHlFW8iWgO1zWcBoaamzv6TOfq1OB1LLwT48jHmTA8GPQELmrJElhx3XBMYpPZwo1FgWUpELNSDpUZkWqWIcHKQNkmmW4XAH5B4UjXEsFH59oUozVuqFq6p52LpWlQ3D/x7d5emXy6+f/YW8+nB+9fFizXlcmve4NEZwskNzRg8ReH5AELzbHcbevbyi1ZT5pcGUMLyR8u+rm+EVOwCKVJfuLgb42/jHY4cH02f707h5W+seM31UArnjOabc3MLWq18+bmtz)

## Expose
`defineExpose()` 暴露元件屬性，上層元件可透過元件參考取得。

```vue
<template>
  <v-dialog v-model="model">
  </v-dialog>
</template>

<script setup>
import { ref } from 'vue'

const model = false
const showDialog = () => model = true

defineExpose({ showDialog });
</script>
```

## Summary
- 元件定義 Props：使用 `const props = defineProps()` 定義元件 Props，以取用父元件綁定的屬性。
  - `<script setup>` 當中以 `props.someprops` 取得 props。
  - `template` 當中直接以 `{{ someprops }}` 取得 props。
- 元件事件定義：使用 `const emits = defineEmits(['submit'])` 定義元件事件。
  - `template` 當中以 `$emit('submit', 'payload')` 觸發事件。
  - `<script setup>` 當中以 `emits('submit', 'payload')` 觸發事件。
- 元件定義 Expose：使用 `defineExpose` 定義元件暴露的屬性，上層元件透過元件參考取得。
- 父元件事件控制
  - 父元件常用 `.prevent`、`.stop` 等等`事件修飾符`控制事件傳遞。
  - 父元件常用`按鍵修飾符`接收特定按鍵事件。

## Reference

- [Vue.js-Provide / Inject](https://vuejs.org/guide/components/provide-inject.html)
- [按鍵修飾符](https://vuejs.org/guide/essentials/event-handling.html#key-modifiers)
- [事件修飾符](https://vuejs.org/guide/essentials/event-handling.html#event-modifiers)