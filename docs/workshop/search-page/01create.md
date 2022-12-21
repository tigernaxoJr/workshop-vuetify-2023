vuetify3 架構下沒有規定頁面要放在 views 資料夾下，建議將 layout、page 分開存放。
新增檔案
layouts/MainLayout.vue 
pages/MainPage.vue 
使用快捷鍵新增頁面模板 vbase
composition api 
架構 bll dal... etc
資料流方向 (ex:table) 
component
 - decouple

`src/main.js` 程式進入點
`src/App.vue` 主頁面
```vue
<template>
  <v-app>
    <v-main>
      <HelloWorld />
    </v-main>
  </v-app>
</template>

<script setup>
  import HelloWorld from '@/components/HelloWorld.vue'
</script>
```