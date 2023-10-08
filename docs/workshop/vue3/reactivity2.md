# 響應性狀態觀察者
Vue 中，除了在 `<template>` 區塊中使用響應性狀態來更新 UI 外，我們也可能需要在程式邏輯中追蹤響應性狀態的變化：
  - 在響應性狀態變化時執行一些動作。
  - 根據響應性狀態的值來計算出另一個響應性狀態。
## watch/watchEffect
- `watch()` 在響應性狀態變化時執行一些動作：
- `watchEffect()` 使用跟蹤的狀態進行其他操作時使用，跟蹤執行函式內所有響應性狀態，要注意效能問題。

[試試看](https://play.vuejs.org/#eNrNVMFy2jAQ/ZWtLranxB4mNwp0aIZDemjSNkdfNGYNCkZyJRnDMP73rizbhLTl0PRQDtja97R667erE1uUZbyvkE3Y1GRalBYM2qqcp1LsSqUtnEBjPoKa22zTPZZ5jpmFBnKtdhDQ9iCVqcyUNBZ+VGisUBJmbmMYBFGPcGlq1H38a8czUJmKF8URiGW5kMDPOXZcb2P4cBO5LO3ZYY+NgJujzCCUWPe5IpjN4ZRKAJFfALGQKzw80LEfgwjmcDOOPA86VfGeFxWStuBpI+RWyHUcx1SVY1h97MngRFIpGg1xec2FhRydrGBjbWkmSXJEI1Vc2zzhpXCy/b5Xx4R+L+WJn42SYRTFnuH5DWSuWAhRa6UHrb+qXTr8HdypqliBVC4jp312g7B4vI8hgPfQ5ujyugf9NaTrtWHjPzk2AH9pmW+XsLPr0qPhcF/S/+JTJ+fNRp3zvMWpaeJHk4aSFhZ3ZcEt0gpgWs5h1v78aHaLaeImuIV9uoXZkklUcyLV4NXEY1Mhy8rC/manVljMUtbjKYPEpzmnO536OW6aF+ELEd398C+ljK9qGQ9ipsnwediIWUNtkIt1ax1dca07KcvUrhQF6oey7eaUTXrfUkZtrerPbczqCkd9PNtgtv1N/NkcXCxlj9QiqPeYsgGzXK/Renj5/Qse6H0AqcKqIPYV8BsaVVTeCUf7VMkVyX7Ba9Xetxc1jcKTWR4sStMX5YS2bdTyU0YX9d2V0s9yb+Pbvv1Y8xNnpf7X)
<!-- ### Deep Watcher
```js
const obj = reactive({ count: 0 })

watch(obj, (newValue, oldValue) => {
  // 物件內部屬性變化時會被呼叫
  // 注意：`newValue` 和 `oldValue` 在這裡會相等
  // 因為它們都指向同一個物件！
})

obj.count++
```
```js
watch(
  () => state.someObject,
  () => {
    // 只有 state.someObject 被取代為另一個物件才會觸發
  }
)
watch(
  () => state.someObject,
  (newValue, oldValue) => {
    // state.someObject 物件內部屬性變化時會被呼叫
    // 注意：`newValue` 和 `oldValue` 在這裡會相等
    // *除非* state.someObject 物件直接被取代
  },
  { deep: true }
)
```
### Eager Watcher
### Callback Flush -->
## Computed
```js
import { ref, computed } from 'vue'

export default {
  setup() {
    const height = ref(1.7) // 身高（公尺）
    const weight = ref(60) // 體重（公斤）

    const bmi = computed(() => {
      return (weight.value / (height.value * height.value)).toFixed(2)
    })

    return { height, weight, bmi }
  }
}

```
[試試看](https://play.vuejs.org/#eNqNUktu2zAQvcqAG0uFK7UNigCuHKApUiAF+kHbJTeKPLaYSiRBUrYKQeuuuuuid/ANcqL4FhmKtuJFEsQrz7yZx3lPr2PvtU7WDbIZy2xhhHZg0TX6jEtRa2UcdGBwOYVC1bpxuIAelkbVMKGlydFQkVfnny9HNEmvajF5xyWXhZLWQYliVTqYe7bodXL6Nj4gm2Pk9NXYJwJqHt6NohjmZ/tnosCWrPOqwemeIVQx7WdpkEIiqHBY6yp3SBVA5pUB/W5vtrvt/1koMiHpEVi/rNUCqzlngZ8zcL81Ui2b+goN1WlgSQPNyLbb/tv9+fsYW7jvOWykbQZdN2jv+wBk6aiATZmz5M5SrJJrqyR9tc5vcuZtEhWar9oJco8zognXcJZXldp8GnrOkF+HflFi8euB/rVtfY+zbwYtmjVyNmIuNyskKR6++PEFW/o/gqS3qWj6CfA7WlU1/sYwdt7IBZ19NDdceznESsjVT3vROpT2IMof6if7YZ4zSuGHJ6Tfn3uSnAx7XPbkIvlLBpJ92A75DYnbZ3gOUUmhGvIWbSClEl5AGceJUx9FS1l8E7P+DhqID60=)
## Reactivity 關係圖
![](/reactivity-overview.png)
## Summary
- `computed`：根據響應性狀態產生另一個響應性狀態，可另外定義 `setter`。
- `watch`/`watchEffect`：監聽響應性狀態變化執行相對應的行為。
  - `watch` 明確指定跟蹤對象；`watchEffect`跟蹤執行函式內所有響應性狀態。
  - `watch` 對象可以是`響應性狀態`、包含響應性狀態的 `getter`。
  <!-- - `watch` 對象可以是`陣列`以跟蹤多個狀態。 -->
  <!-- - `watch` 使用 `getter` 跟蹤狀態時，deep 設置為 `true` 才能跟蹤物件的屬性。
  - `watch` 設定 `immediate: true` 先讓行為立即執行一次，再跟蹤變化。
  - `watchEffect` 不需要 `immediate: true`。
  - `flush: 'post'` 執行函式在狀態改變的下一個 tick 才執行，可以取得已變化的 `DOM` -->
  - 使用 handle function 停止跟蹤。

## Reference
- [Vue API Reference-Watchers](https://vuejs.org/guide/essentials/watchers.html)
- [Vue API Reference-Computed Properties](https://vuejs.org/guide/essentials/computed.html)