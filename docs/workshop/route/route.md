## 路由設置

`src/router.index.js`

```js
import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/MasterLayout.vue'), // 新增這行
    children: [
      {
        path: '',
        name: 'MasterHome',
        component: () => import('@/views/MasterHome.vue'),
      },
      // 新增 Search 頁面路由設置
      {
        path: 'MainSearch',
        name: 'Search',
        // 動態載入(Lazy Loading)語法
        component: () => import('@/views/MainSearch.vue'),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL), // 錯誤的寫法
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
