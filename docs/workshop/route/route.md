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

## Reference

- [Vue Router](https://router.vuejs.org/)
