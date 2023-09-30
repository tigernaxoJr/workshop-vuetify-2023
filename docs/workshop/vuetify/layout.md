# 版面配置
學習目標：
- 了解 vuetify v-app 結構
## Layouts、Views
vuetify3 下使用 `layouts`、`views` 資料夾存放寫的版面、分頁：  
- #### **Layout（佈局）** 
  指**頁面上主要元素的擺放和排列方式**。基礎的佈局方式包含 Header、導航欄、側邊欄、主要內容區等等。
  ![](/switch.png)
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
const drawer = ref(null);
</script>
```

[試試看](https://play.vuetifyjs.com/#eNp9U11PE0EU/SvDvKAJ28bgi6QQP8KDPqhR44vrw7KdloHpzmZ2tkAIyYaPyIcGE30QUhWQaBVDxUQFi/pj7O62T/4F7+y22yUlTZr09p5z7z333OmjeewIM3vNtjNll+ARnJOkZDNDkjHdQig3oGlBxWscr/tH++G35Ub9+7/Tp36l2jj2fG8jeLIWvqw23+36m5+aS7+aewfB8dfg7QtAg8+7ivlnpbWzGryqBWteUFlDD10iaWEOhXXVKtxeDnZOwprXqr/56y1qWjyzrBm2HYVpAa3Xe8BHAKEJQ6A2uUPXVK4AutEEF3ki2mAa1iyjrFGTW+iqyag5ParjvDBmiECjaCCOdDyWy/YWpJtJzpnCJJWMjMUGhNUN/3TTf/4srB6p+rOctsxuX8h0l/N/vG8triMYRYuGpNzS2qJgWX/lg3944tcOwPCWtwU+p7fuLSlrJZ4nLFkM1onm9jDPKGDGHHcl6j+sZNCUDVDVif3VL8HWIrDhPv7hdvj7o7qSOUlZXhALBZWl1m4t3P+ZdE2aCJhKhFamZAZlk97doSA8mdp2D+JcNvVA4adjCmpL5BDpxm+GlmwuJJpHghTQAioIXkKD8LYHFQjHdCRKzg6UC5bL2EXVN+4EPfAQlg4wC7SYmXK4Bf+KeVWsY5OXbMqIuGMrMx0dj6AIUZjBGJ+5FeWkcMlQJ29OEnP6nPyUM6tyOr4riENEmeg4waQhikTG8Pj922QW4gSEG7sM2H3Ae8ThzFUaY9p118qD7BQvUnszsopaxQfO+KwkltNZSglVzIWIr2Ow70af1btyhzPDUZ1uwQcvDGFIZC6Doer70hX8+D9GbLn1)

## Reference
- [Vuetify-Application Layout](https://vuetifyjs.com/en/features/application-layout/)