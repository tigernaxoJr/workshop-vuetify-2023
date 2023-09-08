## 比較 VueX 
 - 原生支援 Typescript
 - 可以直接從 store 取得任何的 State
 - 移除惱人的 Mutation，可直接引入函數使用 action，不需要再使用 **Magic String** 去 dispatch。
 - 可以在 actions 中使用 async/await 取得非同步資料後更改 State
 - 可以設置多個 store 且無需設置 namespaced，所有的 store module 都已自動 namespaced

https://github.com/vuejs/pinia/discussions/1264
https://github.com/vuejs/pinia/discussions/1264#discussioncomment-5802335
you can change state from anywhere you want But keep in mind that if you keep all the updates in one place, it will be much easier to manage and maintain the code in the future.
## Reference
- [Pinia-Introduction](https://pinia.vuejs.org/introduction.html)
- [Medium-How to use pinia with composition script setup](https://blog.devgenius.io/how-to-use-pinia-with-composition-script-setup-2352558fb06c)