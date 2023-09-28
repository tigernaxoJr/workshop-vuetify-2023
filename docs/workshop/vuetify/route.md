## 掛載路由點

設置 `<router-view>`、`<router-link>`

子路由會顯示在 `<router-view></router-view>` 裡面，在 `App.vue` 裡面設置顯示根路由。
`src/App.vue` 主頁面

```vue
<template>
  <router-view />
</template>

<script setup></script>
```

## 路由設置

`src/router.index.js`

```js
import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/Master',
    component: () => import('@/layouts/MasterLayout.vue'), // 新增這行
    children: [
      {
        path: '',
        name: 'MasterHome',
        component: () => import('@/views/MasterHome.vue'),
      },
      // 新增 Search 頁面路由設置
      {
        path: 'Page1',
        name: 'MainPage1',
        // 動態載入(Lazy Loading)語法
        component: () => import('@/views/MainPage1.vue'),
      },
    ],
  },
  {
    path: '/Detail',
    component: () => import('@/layouts/DetailLayout.vue'), // 新增這行
    children: [
      {
        path: '',
        name: 'DetailHome',
        component: () => import('@/views/DetailHome.vue'),
      },
      {
        path: 'Page1',
        name: 'DetailPage1',
        component: () => import('@/views/DetailPage1.vue'),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL), 
  routes,
});
export default router;
```

<!-- 
todo:
路由切換 
區分 route/router
js 程式碼中(sfc 外)，可呼叫 router 的位置
-->
## 路由定義
### 具名路由
### 巢狀路由
## 路由參數
## 程式導航
## 路由守衛
## router-link/router-view
```vue
<script src="https://unpkg.com/vue@3"></script>
<script src="https://unpkg.com/vue-router@4"></script>

<div id="app">
  <h1>Hello App!</h1>
  <p>
    <!-- use the router-link component for navigation. -->
    <!-- specify the link by passing the `to` prop. -->
    <!-- `<router-link>` will render an `<a>` tag with the correct `href` attribute -->
    <router-link to="/">Go to Home</router-link>
    <router-link to="/about">Go to About</router-link>
  </p>
  <!-- route outlet -->
  <!-- component matched by the route will render here -->
  <router-view></router-view>
</div>
```
### 多 router-view 

## Reference
- [vue router](https://router.vuejs.org/)
