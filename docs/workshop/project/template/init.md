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
import { reactive } from "vue";
import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', {
// 建立一個可觀察者物件，用來存放 app 的狀態和資訊
  state: () => ({
	initialized: false, // 表示 state 是否已經初始化完畢
	userId: null, // 存放使用者 id
	userName: null, // 存放使用者名稱
	observers: [], // 存放觀察者列表
  }),
  actions:{
    // 定義一個方法，用來向觀察者列表中添加觀察者
	AddObserver(observer) {
      this.observers.push(observer);
    },
    // 定義一個方法，用來通知所有的觀察者執行他們的回調函數
	NotifyObservers() {
      this.observers.forEach((observer) =>  observer.callback());
    };
	async Init() {
      // 模擬一個非同步操作，例如取得驗證後，獲得的使用者 id 及名稱
      const { userId, userName } = await fetchUser();
      // 將取得的資訊存放到 app 物件中
      this.userId = userId;
      this.userName = userName;
      // 將 initialized 設為 true，表示 app 已經初始化完畢
      this.initialized = true;
      // 通知所有的觀察者執行他們的回調函數
      this.notifyObservers();
    }
  }
})
```

#### 頁面元件
```html
<script setup>
import { onMounted } from "vue";
import { useAppStore } from "store/app.js";

const data = reactive({})
// 定義一個方法，用來模擬頁面元件的初始化操作
const initPage = function () {
  // 模擬一個非同步操作，例如取得這個使用者與該頁面相關的資料
  const result = await fetchPageData(app.userId);
  // 將取得的資料存放到頁面元件中
  Object.assign(data, result)
};

// 取得 appStore
const app = useAppStore();
// 在頁面元件掛載時執行以下邏輯
// 判斷 app 是否已經初始化完畢 
//  - 如果是，直接執行頁面元件的初始化操作
//  - 如果不是，向 app 的觀察者列表中添加一個觀察者，並將頁面元件的初始化操作作為回調函數傳入
onMounted(() => {
  if (app.initialized) return initPage();
  app.AddObserver(initPage);
});
</script>
```

