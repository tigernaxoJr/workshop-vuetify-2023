# Composable
在 Vue 應用中，"Composable" 是一種利用 Vue 的 Composition API 封裝和重用有狀態邏輯的函數。這種邏輯涉及管理隨時間變化的狀態，例如追蹤頁面上的滑鼠位置或資料庫連接狀態等。
這與只需輸入並立即返回預期輸出的工具函數（如`lodash`、`date-fns`...）不同。

範例，元件監聽滑鼠事件，在元件當中充滿程式碼、邏輯：
```vue
<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const x = ref(0)
const y = ref(0)

function update(event) {
  x.value = event.pageX
  y.value = event.pageY
}

onMounted(() => window.addEventListener('mousemove', update))
onUnmounted(() => window.removeEventListener('mousemove', update))
</script>

<template>Mouse position is at: {{ x }}, {{ y }}</template>
```

我們可以利用 `Composable` 的概念將 mouse position 邏輯抽出
```js
// mouse.js
import { ref, onMounted, onUnmounted } from 'vue'

// by convention, composable function names start with "use"
export function useMouse() {
  // state encapsulated and managed by the composable
  const x = ref(0)
  const y = ref(0)

  // a composable can update its managed state over time.
  function update(event) {
    x.value = event.pageX
    y.value = event.pageY
  }

  // a composable can also hook into its owner component's
  // lifecycle to setup and teardown side effects.
  onMounted(() => window.addEventListener('mousemove', update))
  onUnmounted(() => window.removeEventListener('mousemove', update))

  // expose managed state as return value
  return { x, y }
}
```

接著在 vue 當中剩餘的邏輯會更清晰：
```vue
<script setup>
import { useMouse } from './mouse.js'

const { x, y } = useMouse();
</script>

<template>Mouse position is at: {{ x }}, {{ y }}</template>
```

## todo
- 閱讀官方的非同步狀態範例
- 閱讀官方的非同步狀態搭配 watchEffect 範例
- 解釋 [`Extracting Composables for Code Organization`](https://vuejs.org/guide/reusability/composables.html#extracting-composables-for-code-organization)

## Reference
[vue-Composables](https://vuejs.org/guide/reusability/composables.html)