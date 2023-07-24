vuetify3 下使用 `layouts`、`views` 資料夾存放寫的版面、分頁。  
## Layout/Views
**Layout（佈局）** 指**頁面上主要元素的擺放和排列方式**。基礎的佈局方式包含 Header、導航欄、側邊欄、主要內容區等等。

**Views（視圖）** 指應用程序中**不同頁面**。在單頁面應用程序（SPA）中，所有頁面的內容都在同一個頁面中動態地進行更改，而不需要像傳統的多頁面應用程序那樣每次切換頁面都要進行整個頁面的重新加載。"Views" 可以是一個單獨的Vue組件，它們根據路由的不同來展示不同的內容，從而實現在同一個頁面上切換不同的視圖。

## 新增佈局

新增 `layouts/MainLayout.vue`
```vue
<template>
  <v-app>
    <v-app-bar flat border>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>應用程式名稱</v-toolbar-title>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer">
    </v-navigation-drawer>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script setup>
import { ref } from "vue";
import SideMenu from "@/components/SideMenu";
import menus from "@/menus";
const drawer = ref(null);
const opened = ref(["01"]);
</script>
```

P.S.需要其他現成模板可以到[Wireframes](https://vuetifyjs.com/en/getting-started/wireframes/)挑選