# Layouts、Views
vuetify3 下使用 `layouts`、`views` 資料夾存放寫的版面、分頁：  
- #### **Layout（佈局）** 
  指**頁面上主要元素的擺放和排列方式**。基礎的佈局方式包含 Header、導航欄、側邊欄、主要內容區等等。
- #### **Views（視圖）** 
  指應用程序中**不同頁面**。在單頁面應用程序（SPA）中，所有頁面的內容都在同一個頁面中動態地進行更改，而不需要像傳統的多頁面應用程序那樣每次切換頁面都要進行整個頁面的重新加載。"Views" 可以是一個單獨的Vue組件，它們根據路由的不同來展示不同的內容，從而實現在同一個頁面上切換不同的視圖。

## 挑選 Wireframes
需要現成模板可以到[Wireframes](https://vuetifyjs.com/en/getting-started/wireframes/)挑選來修改。

## 新增佈局
新增 `layouts/MainLayout.vue`
```vue
<template>
  <!--最上層組件，在一個應用裡只能被渲染一次，必須是所有 Vuetify 组件的根節點。-->
  <v-app>
    <!--最上面的 app bar -->
    <v-app-bar flat border>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>應用程式名稱</v-toolbar-title>
    </v-app-bar>

    <!--左邊 navigation-drawer 的內容寫在這裡-->
    <v-navigation-drawer v-model="drawer">
    </v-navigation-drawer>

    <!--layout 內容寫在這裡-->
    <v-main>
      <!--裡面定義的 children 會顯示在這裡-->
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

## Reference
- [Vuetify-Application Layout](https://vuetifyjs.com/en/features/application-layout/)