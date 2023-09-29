# 路由配置
## 路由設置
### `src/router.index.js`
::: info 練習目標
- 定義路由
- 具名路由
- 巢狀路由
- 路由參數
- 惰性加載(lazy-loading)
:::

```js:line-numbers {16-35}
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
        // 路由參數
        path: 'User/:id',
        name: 'AdminUser',
        component: () => import( '@/views/AdminUser.vue'),
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

## 掛載路由點
### `@/layouts/AdminLayout.vue`
```vue
<template>
  <v-container>
    <!-- 使用路徑導航 -->
    <router-link class="d-block" to="/Admin/User?id=queryId">
      使用路徑導航: '/Admin/User?id=queryId'
    </router-link>
    <!-- 使用 route object 導航 -->
    <router-link class="d-block" :to="route2">
      使用 route object 導航: {{ route2 }}}}
    </router-link>
    <!-- 使用程式導航 -->
    <v-btn class="d-block" flat variant="outlined" @click="onswitch">
      Programmatic Navigation
    </v-btn>
  </v-container>
  <v-container>
    <!-- 子路由會顯示在 <router-view></router-view> 裡面 -->
    <router-view></router-view>
  </v-container>
</template>
<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const route1 = { name: "AdminUser", query: { id: "queryId" } };
const route2 = { name: "AdminUser2", params: { id: "paramsId" } };

const flag = ref(true);
const onswitch = () => {
  const route = flag.value ? route1 : route2;
  router.push(route);
  flag.value = !flag.value;
};
</script>
```
### `@/views/AdminUser.vue`
```vue
<template>
  <v-table>
    <thead>
      <tr>
        <th>參數來源</th>
        <th>參數值</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>route params</td>
        <td>{{ route.params.id }}</td>
      </tr>
      <tr>
        <td>url query</td>
        <td>{{ route.query.id }}</td>
      </tr>
    </tbody>
  </v-table>
</template>
<script setup>
import { useRoute } from "vue-router";
const route = useRoute();
</script>
```

打開 [`http://localhost:3000/Admin`](http://localhost:3000/Admin) 看看效果
### 練習
- 程式導航
- 區分 `query` 和 `params`
- 區分 `router` 和 `route`
- 修改程式碼觀察如果路由設置參數 :id 卻沒給會發生什麼事，再把路由設置的 :id 改為 :id? 觀察效果。
- 對沒有設置 /:id 的路徑傳入 id params 觀察效果。
- 在 store 取得 Router, route 的方法

## 路由守衛
基本觀念： 
- to 即將進入的 route
- from 即將離開的 route
- 調用 next 之前路由的狀態為待定，調用 next 會解析(resolve) hook 並確定路由狀態，路由狀態確定後才會進入
```js
router.beforeEach((to, from, next) => {
  if (to.name !== 'Login' && !isAuthenticated) next({ name: 'Login' })
  else next()
})
```

深入學習：
- **Per-Route Guard
- **In-Component Guards
- Global Resolve Guards
- Global After Hooks
- Global injections within guards

## Reference
- [vue router](https://router.vuejs.org/)
