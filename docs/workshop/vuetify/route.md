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

### `src/router.index.js`
::: info 練習目標
- 定義路由
- 具名路由
- 巢狀路由
- 路由參數
- 惰性加載(lazy-loading)
:::

```js
// Composables
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '',
        name: 'Home',
        component: () => import(/* webpackChunkName: "home" */ '@/views/Home.vue'),
      },
    ],
  },
  {
    path: '/Admin',
    component: () => import('@/layouts/default/Default.vue'),
    // 巢狀路由
    children: [
      {
        path: '',
        // 具名路由
        name: 'Admin', 
        // lazy-loaded： 惰性加載，路由被訪問時才會載入相應的組件。
        component: () => import( '@/views/Admin.vue'),  
      },
      {
        path: 'Statistic',
        name: 'AdminStatistic',
        component: () => import( '@/views/Statistic.vue'),
      },
      {
        path: 'Statistic',
        name: 'AdminStatistic',
        component: () => import( '@/views/Statistic.vue'),
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router

```
### router-link/router-view
::: info 練習目標
- router-view
- router-link
:::
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
### 多個 router-view
<!-- 
todo:
路由切換 
區分 route/router
js 程式碼中(sfc 外)，可呼叫 router 的位置
-->

## 程式導航
### 在其他地方(ex: store)取得 Router, route 的方法

## 路由守衛

## Reference
- [vue router](https://router.vuejs.org/)
