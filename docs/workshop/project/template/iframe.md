# 內嵌往頁
目前 vite 還沒有支持 Module Federation(Webpack 有)，iframe 是前端微服務的原始做法之一，只能透過 iframe 的方式把不同專案的功能嵌入。
P.S. Module Federation ：在A專案上改程式，B專案也會即時更新，不同應用程式中有相同組件，就不需要把每個組件的程式碼複製貼上到每一个專案中，解决了跨應用程式程式碼共享的問題。[參考](https://webpack.js.org/concepts/module-federation/)

## 延遲反映的 iframe
在 Vue 中，當我們改變一個 DOM 屬性的值時，瀏覽器通常會立即反映這個變化。  

然而，iframe 的 src 屬性的行為與大部分的 DOM 屬性不同，對於 iframe 的 src 屬性來說，即使我們改變了它的值，瀏覽器也不會立即重新載入 iframe。
在 iframe 中，event.timeStamp 是根據 iframe 的時戳計算的，這個值會小於基於父框架計算出來的 invoker.attached 時戳 = getNow()。
造成事件觸發的時戳小於呼叫者的時戳，因此，在 iframe 加載所需的時間差內，事件不會被觸發。

### 技巧
在改變 url 的值之前，先將 iframe 的 src 設為空字串，然後在下一個 tick 中再將它設回 url 的值。這樣，iframe 就會重新載入新的網址。例如：
```vue
<template>
  <div class="container">
    <iframe :src="url" width="800" height="600"></iframe>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const url = ref('https://vuejs.org/');
// 定義一個方法來改變 iframe 的 src 屬性
const changeIframeSrc = async (newUrl) => {
  url.value = ''; // 先將 src 屬性設為空字串
  await nextTick(); // 等待下一個 tick
  url.value = newUrl; // 再將 src 屬性設為新的 URL
};
</script>
```

## 尺寸同步
詳見範例：
```vue
<template>
  <!-- 直接綁定 virtual-width 讓 iframe 裡面的網頁以該寬度檢視 -->
  <FrameReflector
    modelValue="https://www.ktgh.com.tw/Default.asp"
    :virtual-width="1100"
  ></FrameReflector>
</template>

<script setup>
import FrameReflector from "@/components/FrameReflector.vue";
</script>

<style lang="scss" scoped></style>
```