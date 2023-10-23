一切要從觀察者模式開始說起。
## 觀察者模式
觀察者模式（Observer Design Pattern）是一種設計模式，它允許一個物件（被稱為主題或可觀察者）通知它的所有觀察者（或訂閱者）當它的狀態發生變化時。在我們的案例中，app 就是主題，而頁面元件就是觀察者。我們可以讓 app 維護一個觀察者列表，並且在 app 初始化完畢後通知所有的觀察者執行他們的回調函數。這樣，我們就可以保證頁面元件在 app 初始化完畢後才執行自己的初始化操作。

P.S. 觀察者模式和訂閱模式不同。
![](/observer.png)

## 元件初始化範例
在 vue3 的應用程式中，如何在頁面元件掛載時等待 app 初始化的非同步資訊。這種情況可能發生在以下場景：我們的 app 需要在初始化時進行一些非同步的操作，例如取得驗證後，獲得的使用者 id 及名稱。然而，我們的頁面元件可能會用到這些資訊，例如取得這個使用者與該頁面相關的資料。如果我們直接在頁面元件的 created 或 mounted 鉤子中執行這些操作，可能會發生錯誤，因為 app 還沒有獲得這些資訊。因此，我們需要一種機制來保證頁面元件掛載時 app 已經初始化完畢，或者至少能夠在 app 初始化完畢後執行頁面元件的初始化操作。這就是觀察者模式可以幫助我們解決的問題。  
範例：
#### app store
```js
// app.js
import { defineStore } from 'pinia'

const loadingTags= []
const initProcedue = []
const afterInitCallBack = []
export const useAppStore = defineStore('app', {
  state: () => ({
    inited: false, // 表示 state 是否已經初始化完畢
  }),
  getters:{
    loading(){
      return loadingTags.length > 0
    }
  },
  actions: {
    // 添加 app 啟動程序，用來向觀察者列表中添加觀察者
    addInitProcedure(func) {
      initProcedue.push(func);
    },
    // 啟動 app
    async init() {
      initProcedue.forEach(async (x) => await x());
      // 將 initialized 設為 true，表示 app 已經初始化完畢
      this.inited = true;
      afterInitCallBack.forEach((x) => x());
    },
    // 添加啟動 app 之後要做的事
    onInited(func) {
      afterInitCallBack.push(func);
    },
    // 加入 loading tag
    AddLoading(key){
      loadingTags.push(key)
    },
    // 移除 loading tag
    RemoveLoading(key){
      const idx = loadingTags.indexOf(key)
      if(idx !== -1) loadingTags.splice(idx, 1)
    }
  }
})
```

#### 頁面元件
```html
<script setup>
import { onMounted } from "vue";
import { useAppStore } from "store/app.js";
// import { useAuthStore } from "./store/auth";

const appstore = useAppStore();
// const authstore = useAuthStore();

appstore.addInitProcedure(() => {
  console.log("我會在 app 初始化後執行 1");
});
appstore.addInitProcedure(() => {
  console.log("我會在 app 初始化後執行 2");
});

onMounted(async () => {
  const loadingFlag = "app";
  appstore.AddLoading(loadingFlag);
  try {
    // authstore.Authentication(); // 取得驗證
    // authstore.RemoveKey(); // 移除 Key
    appstore.init(); // 初始化 app
  } catch (error) {
    // handle error
    console.error(error);
  } finally {
    appstore.RemoveLoading(loadingFlag);
  }
});
</script>
```

