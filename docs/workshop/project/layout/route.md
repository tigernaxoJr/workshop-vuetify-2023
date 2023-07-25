## 路由設置

`src/router.index.js`

```js
import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    // component: () => import('@/layouts/default/Default.vue'), // 刪除這行
    component: () => import('@/layouts/MainLayout.vue'), // 新增這行
    children: [
      {
        path: '',
        name: 'Home',
        component: () => import('@/views/Home.vue'),
      },
      // 新增 Search 頁面路由設置
      {
        path: 'Search',
        name: 'Search',
        // 動態載入(Lazy Loading)語法
        component: () => import('@/views/Search.vue'),
      },
    ],
  },
];

const router = createRouter({
  // history: createWebHistory(process.env.BASE_URL), // 錯誤的寫法
  history: createWebHistory(import.meta.env.BASE_URL), // 正確的寫法
  routes,
});
export default router;
```

## 掛載路由點

設置 router-view

子路由會顯示在 `<router-view></router-view>` 裡面，在 `App.vue` 裡面設置顯示根路由。
`src/App.vue` 主頁面

```vue
<template>
  <router-view />
</template>

<script setup></script>
```

## Reference

- [Vue Router](https://router.vuejs.org/)
