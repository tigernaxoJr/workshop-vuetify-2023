---
---
# Pinia
Pinia 是 Vue 的一個狀態管理庫，用來在組件/頁面之間共享狀態。好處：
 - Devtools 支持 
 - 服務器端渲染(SSR)支持
 - 跟蹤 action、mutation 的時間軸
 - ... 其他

P.S. 在服務器端渲染(SSR; Server Side Rendering)應用程式中，通過簡單的 export const state = reactive({}) 共享全局狀態則會使應用程序暴露於安全漏洞。
<iframe src="https://codesandbox.io/embed/pinia-playground-forked-jdf5s7?fontsize=14&hidenavigation=1&theme=dark"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="pinia-playground (forked)"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>

## 比較 VueX 
::: code-group
 ```js [vuex]
// count module
 const count = {
  state: {
    count: 1
  },
  mutations: {
    increment (state) {
      // 变更状态
      state.count++
    }
  }
}

 // store
 import { createStore } from 'vuex'
 import { count } from 'modules/count'
 const store = createStore({
  modules: {
    count: count,
	// 其他 modules...
  }
})

// comonent 內引用
store.commit('count/increment')
 ```
 ```js [pinia]
 // stores/counter.js
import { defineStore } from 'pinia'
export const useCounterStore = defineStore(
  'counter', 
  { state: () => ({ count: 0 }) }
)

 // 引用
 import { useCounterStore } from '@/stores/counter'
 const counter = useCounterStore()
 counter.count++
 ```
 :::

 - 原生支援 Typescript
 - 可以直接從 store 取得任何的 State (不需要 mapState... 等等動作)
 - 移除惱人的 Mutation，可直接引入函數使用 action，不需要再使用 **Magic String** 去 dispatch。
 - 可以在 actions 中使用 async/await 取得非同步資料後更改 State
 - 可以對 store state 直接修改，甚至可以直接綁定 v-model 
 - 可以設置多個 store 且無需設置 namespaced，所有的 store module 都已自動 namespaced

https://github.com/vuejs/pinia/discussions/1264
https://github.com/vuejs/pinia/discussions/1264#discussioncomment-5802335
you can change state from anywhere you want But keep in mind that if you keep all the updates in one place, it will be much easier to manage and maintain the code in the future.
## Reference
- [Pinia-Introduction](https://pinia.vuejs.org/introduction.html)
- [Medium-How to use pinia with composition script setup](https://blog.devgenius.io/how-to-use-pinia-with-composition-script-setup-2352558fb06c)