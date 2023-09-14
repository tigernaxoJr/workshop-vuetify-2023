# All About Javascript
 - let const, var
 <!-- - promise, then
 - call back hell
 - try catch async await  -->
## 非同步處理
非同步操作是指在執行程式碼時，不需要等待某個操作完成才繼續執行下一個操作，而是可以同時進行多個操作，並在適當的時機處理它們的結果。
例如：我們想要從網路上下載一張圖片，但是我們不知道這個過程會花多少時間，也不想讓程式卡住等待圖片下載完成，那麼我們就可以使用非同步操作來實現。

### Promise
promise 是一種用來處理非同步操作的語法，它可以讓我們用更簡潔的方式寫出可讀性高的程式碼。
promise 就像是一個承諾，它代表了一個未來會完成或失敗的非同步操作，以及它所產生的值。
我們可以用以下的程式碼來建立一個 promise 物件：
```js
let promise = new Promise(function(resolve, reject) {
  // 在這裡執行非同步操作，例如下載圖片
  // 如果成功，呼叫 resolve(value) 並傳入結果值
  // 如果失敗，呼叫 reject(reason) 並傳入錯誤原因
});
```
promise 物件有兩種可能的狀態：
 - 待定（pending），當 promise 物件被建立時，它的狀態是待定（pending），直到非同步操作完成或失敗為止。
 - 已實現（fulfilled）
 - 已拒絕（rejected）

### then
當 promise 物件的狀態改變，可以使用 then 方法來註冊回呼函式（callback function），來處理成功或失敗的結果。
then 方法接受兩個參數：
 - 第一個是成功時要執行的函式
 - 第二個是失敗時要執行的函式
範例：
```js
promise.then(function(value) {
  // 這裡的函式會在 promise 狀態變成已實現時執行，並接收到非同步操作的結果值
  // 我們可以在這裡使用結果值來做一些事情，例如顯示圖片
}, function(reason) {
  // 這裡的函式會在 promise 狀態變成已拒絕時執行，並接收到非同步操作的錯誤原因
  // 我們可以在這裡處理錯誤，例如顯示錯誤訊息
});
```

### Chaining Promise
then 方法會回傳一個新的 promise 物件，所以我們可以將多個 then 方法串連起來，形成一個鏈式結構（promise chain）。
讓我們可以依序執行多個非同步操作，並將前一個操作的結果傳遞給下一個操作，例如：
```js
promise.then(function(value) {
  // 做第一件事情
}).then(function(value) {
  // 做第二件事情
}).then(function(value) {
  // 做第三件事情
});
```

### catch
如果在鏈式結構中的任何一個操作失敗了，我們可以使用 catch 方法來捕捉錯誤，並統一處理。
catch 方法會接收一個參數，就是失敗時要執行的函式，例如：
```js
promise.then(function(value) {
  // 做第一件事情
}).then(function(value) {
  // 做第二件事情
}).then(function(value) {
  // 做第三件事情
}).catch(function(reason) {
  // 處理任何一個操作的錯誤
});
```

### async/await
 - async：關鍵字，它可以用來宣告一個函式是非同步的，也就是說它會回傳一個 promise 物件
 - await：關鍵字，它可以用來等待一個非同步操作完成，也就是說它會等待一個 promise 物件的實現或拒絕。

async 和 await 是在 ES2017 中加入的新語法，它們是基於 promise 之上的語法糖，用更接近同步的方式寫出非同步的程式碼。
async/await 優點：
 - 不需要使用 then 和 catch 方法來註冊回呼函式，直接使用變數來存取非同步操作的結果值或錯誤原因。
 - try/catch 方法可以用來捕捉非同步操作的錯誤，並處理錯誤，例如顯示錯誤訊息。
P.S. 目前不支援 top-level await，因此 await 只能在 async 函式中使用，否則會產生語法錯誤。

範例：
```js
async function downloadImage(url) {
  // 在這裡執行非同步操作，例如下載圖片
  // 如果成功，回傳結果值
  // 如果失敗，拋出錯誤原因
}

async function showImage(url) {
  try {
    // 使用 await 等待非同步操作的完成，並將結果值存入變數中
    let image = await downloadImage(url);
    // 使用結果值來做一些事情，例如顯示圖片
  } catch (error) {
    // 使用 try...catch 語句來捕捉錯誤，並處理錯誤，例如顯示錯誤訊息
  }
}
```

// 這樣可以讓我們的程式碼更簡潔、更易讀、更易維護

// 日常生活類比舉例
// 我們可以把 promise 比喻成訂購外送餐點的過程，當我們打電話訂購時，店家會給我們一個預計送達的時間，這就像是建立一個 promise 物件
// 然後我們可以繼續做自己的事情，不需要等待餐點送到才繼續執行下一個動作，這就像是非同步操作
// 當餐點送到時，我們可以拿到餐點並享用，這就像是 promise 狀態變成已實現時執行 then 方法中的函式
// 如果餐點沒有送到或送錯了，我們可以打電話投訴或取消訂單，這就像是 promise 狀態變成已拒絕時執行 catch 方法中的函式

// 我們可以把 async 和 await 比喻成在辦公室工作的





 - anonymous(arrow) function
 - Asynchronous JavaScript/Promise ( async/await vs then ) (https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous)
 - prototype/class/static
## Reference
 -[Javascript patterns](https://www.freecodecamp.org/news/javascript-design-patterns-explained/)
 -[Asynchronous JavaScript/Promise ( async/await vs then )](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous)