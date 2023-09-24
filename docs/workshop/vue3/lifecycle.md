# Vue 元件生命週期
## 生命週期
參考圖，實際上最常用到的是 onMounted、onUnMounted：
![](https://vuejs.org/assets/lifecycle.16e4c08e.png)
## 生命週期鉤子
Vue3 的生命週期鉤子（lifecycle hooks）實際上也是觀察者設計模式的一種實現。在這種模式中，一個目標對象管理所有依賴於它的觀察者對象，並在其本身的狀態改變時主動通知它們。在 Vue3 中，當組件的某個生命週期階段到達時（例如，組件被掛載到 DOM、更新或卸載等），相應的生命週期鉤子就會被調用。

當我們在 Vue3 中調用 onMounted 生命週期鉤子時，Vue 會自動將我們提供給 onMounted 的回調函數與當前正在活動的組件實例進行關聯。這意味著，當組件被掛載時，我們的回調函數將被執行。
```vue
<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  console.log(`the component is now mounted.`)
})
</script>
```

Vue3 有很多 lifecycle hook ，但最常用的是 onMounted
::: details Lifecycle Hook
- onMounted()
- onUpdated()
- onUnmounted()
- onBeforeMount()
- onBeforeUpdate()
- onBeforeUnmount()
- onErrorCaptured()
- onRenderTracked()
- onRenderTriggered()
- onActivated()
- onDeactivated()
- onServerPrefetch()
:::

## Reference
- [Vue.js-Lifecycle Hooks](https://vuejs.org/guide/essentials/lifecycle.html)