# Vue 元件生命週期
## 生命週期
每個 Vue 組件實例在創建時都會經歷一系列初始化步驟，例如`設置數據觀察`、`編譯模板`、`將實例掛載到 DOM `並在數據更改時`更新 DOM`。在過程中，元件會運行稱為生命週期鉤子 (lifecycle hooks) 的函數，使開發者能夠在特定階段添加自己的程式碼。

參考圖，實際上最常用到的是 setup、onMounted、onUnMounted：
![](https://vuejs.org/assets/lifecycle.16e4c08e.png)
## 生命週期鉤子
### 觀察者設計模式
Vue3 的生命週期鉤子（lifecycle hooks）實際上也是觀察者設計模式的一種實現。在這種模式中，一個目標對象管理所有依賴於它的觀察者對象，並在其本身的狀態改變時主動通知它們。

### onMounted
在 Vue3 中，當組件的某個生命週期階段到達時（例如，組件被掛載到 DOM、更新或卸載等），相應的生命週期鉤子就會被調用。  
當我們在 Vue3 中調用 onMounted 生命週期鉤子時，Vue 會自動將我們提供給 onMounted 的回調函數與當前正在活動的組件實例進行關聯。這意味當組件被掛載時，我們的回呼函數將被執行。
```vue
<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  console.log(`元件已掛載`)
});
</script>
```
[試試看](https://play.vuejs.org/#eNqNUslu2zAQ/RWCFzmALR7SkyEbaYscWqAL2h55iCKNbabcQA5lA4b/vSPKURVnQQQIImd7y+jIP3pfdgn4klcIxusaYS0to6dqVccCbFaS00nydSXoS8lKTCrpGpugPLIImDxFlPEuIDv2vXPm7DeXLELLTmwTnGEFoRXSNs5GZD3Eqi+c2aT11RB2GkrttrPiHjYuADsPmOfqZZG/ZVfrBNQwzp/NrthqzY4D+emcO9wBBYiWBYtMRWbdnpmhrbyjIZcdxTj1ZdATvZUYdK/5nA+SF6b25UN0lszMNOQ5ESVfPhKTnPT3d8l3iD4uhWhaS20taNWF0gIK6424oTIRiIMysGidubkur8sPtIGI03AJ0Szug9tHCDRE8vkERlCwg7AIYFsIEN4Le9E2hb5IPYPv0U9kEJmCkSzdqO2FJf0ilIbww6Miy59YU2vt9l9zDEOCUUuzg+bvC/GHeBg0/QyQmU30Yx22gEP69vd3ONB5TBrXJn1ewyvJX0C/Q+o5DmWfkm2J9qQus/2SN6zs9k+8PSDY+CiqJ5rdyPV5H5/fkP6fLrk9unj6B2QDOdE=)

Vue3 有很多 lifecycle hook ，但最常用的是 onMounted、onUnmounted
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

## Summary
- 組件到達某個生命週期階段，相應的生命週期鉤子就會被調用。
- 生命週期鉤子是`觀察者設計模式`的一種實現。
- `setup` 是組件實體產生前的準備階段，在組件建立前被調用。
- `onMounted` 是組件被掛載到 DOM 的生命週期鉤子。
- `onUnMounted` 是組件從 DOM 卸載的生命週期鉤子，常用於解除事件監聽和 watcher。

## Reference
- [Vue.js-Lifecycle Hooks](https://vuejs.org/guide/essentials/lifecycle.html)