# 元件溝通 (Provide-Inject)

如果只用 props 需要傳遞好幾次:
![](https://vuejs.org/assets/prop-drilling.11201220.png)
使用 provide/inject:
![](https://vuejs.org/assets/provide-inject.3e0505e4.png)

## 使用方法

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

## Working with Reactivity

應該把 provided state 和 mutations function 集中在同一個元件，易於維護(高內聚性)，範例：

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
