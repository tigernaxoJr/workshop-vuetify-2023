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

