vuetify3 下預設分 `layouts`、`views` 資料夾存放，新增。  
## 新增 
新增 `layouts/MainLayout.vue`
```vue
<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer">
      <!-- 這裡塞 Menu List  -->
    </v-navigation-drawer>

    <v-app-bar>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>應用程式名稱</v-toolbar-title>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script setup>
import { ref } from 'vue';
const drawer = ref(null)
</script>
```
P.S.需要其他現成模板可以到[Wireframes](https://vuetifyjs.com/en/getting-started/wireframes/)挑選

## 新增查詢頁面
- views/MainPage.vue   
使用 `vbase` 快捷鍵新增頁面模板 

## 引入 template

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