# Javascript
## let const, var

**不要用 var，用 const 和 let**

在現代 JavaScript 開發中，我們不再需要使用var來聲明變數。相反，我們應該使用const來聲明不變的變數，以確保代碼的穩定性，以及使用let來聲明需要修改的變數，以提高代碼的可讀性和可維護性。這種方式有助於避免許多潛在的錯誤，並促使我們寫出更乾淨、更可靠的 JavaScript 代碼。

1. `var`，在過去的 JavaScript 版本中，var是聲明變數的唯一方式。然而，它有一些缺點：
    - Function Scope: 使用var聲明的變數是函數作用域的，這意味著它們只在最近的函數內可見，而不是在區塊作用域中。
    - Hoisting: var聲明的變數會提升（hoist）到它所在作用域的頂部，這可能導致變數在聲明之前被使用，引發錯誤。
    - Reassignment: 使用var聲明的變數可以被重複賦值，這可能導致代碼中的意外變化。
2. `const`、`let` 現代 JavaScript 引入了兩個新的變數聲明方式：const和let，它們解決了var的問題，並提供更多的可控性。
    - `const`（常數）：使用const聲明的變數是常數，意味著它們的值在聲明後不能被重新賦值。這確保了變數的不變性，並使代碼更容易理解。
      ```js
      const pi = 3.14;
      pi = 4; // 這裡會引發錯誤
      ```
    - `let`：let是區塊作用域變數，它們只在它們被聲明的區塊中可見，這消除了var引起的一些問題。
      ```js
      if (true) {
        let x = 10;
      }
      console.log(x); // 這裡會引發錯誤，因為 x 不在這個作用域中可見
      ```
3. 提高可讀性和可維護性
  讓程式碼更容易理解，減少錯誤並提高可維護性。它們提供了更多的約束，並使代碼的行為更可預測。

## 匿名函數/一般函數
### this 指涉
- 匿名函數中，this 指的是該函數在哪裡被定義
- 一般函數中，this 指的是該函數被呼叫的物件

::: details
在JavaScript中，使用const obj = this是一種常見的技巧，通常在需要在函數內部使用外部函數的this上下文時使用。 這種技巧特別適用於回呼函數或巢狀函數，以確保this引用的是正確的物件。 沒有使用這種技巧時，可能會發生與預期不符的this綁定，導致錯誤。

下面是一個使用const obj = this的範例以及一個沒有使用它的情況，以說明這個技巧的作用和必要性。

使用 const obj = this 的情況：

```javascript
myObject = {
   name: "Alice",
   greet: function () {
     const obj = this; // 將外部的 this 綁定到 obj 上
     setTimeout(function () {
       console.log(`Hello, ${obj.name}`); // 在巢狀函數內使用 obj 來引用外部的 this 對象
     }, 1000);
   },
};

myObject.greet(); // 輸出 "Hello, Alice"，而不是 undefined
```
在這個範例中，使用const obj = this將外部的this綁定到obj上，以確保在setTimeout回呼函數中，this引用的是myObject，而不是setTimeout的上下文。 如果沒有這個綁定，this將指向window（或undefined在嚴格模式下），導致無法存取name屬性。

沒有使用 const obj = this 的情況：

```javascript
myObject = {
   name: "Alice",
   greet: function () {
     setTimeout(function () {
       console.log(`Hello, ${this.name}`); // 這裡的 this 會指向 window（或 undefined）
     }, 1000);
   },
};

myObject.greet(); // 輸出 "Hello, undefined"
```

在沒有使用const obj = this的情況下，this在setTimeout回呼函數中引用的是全域上下文（window或undefined），導致無法存取myObject的屬性。 在這種情況下，錯誤的this綁定可能會導致未定義的屬性錯誤或其他問題。

因此，使用const obj = this是一種良好的實踐，以確保在巢狀函數中存取外部函數的this上下文，並避免與this綁定相關的錯誤。
:::
### 暫時性死區
- 匿名函數，先定義才能使用
- 一般函數，會提升，可以在末端定義

## 非同步處理
非同步操作是指在執行程式碼時，不需要等待某個操作完成才繼續執行下一個操作，而是可以同時進行多個操作，並在適當的時機處理它們的結果。
例如：我們想要從網路上下載一張圖片，但是我們不知道這個過程會花多少時間，也不想讓程式卡住等待圖片下載完成，那麼我們就可以使用非同步操作來實現。

### Call Back
回呼函數（Callback Function）是一種用於處理非同步操作的程式模式。 在Promise出現之前，回呼函數是處理非同步問題的常見方式。 它的基本思想是，你傳遞一個函數作為參數給另一個函數，並在後者完成任務後呼叫前者，將結果傳遞給回調函數。

在回調函數的情況下，處理非同步操作通常會採用嵌套的方式，導致回調地獄（Callback Hell），這會使程式碼難以維護和閱讀。 例如：

```js
function makeAjaxRequest(url, callback) {
  // 執行 AJAX 請求，然後在完成時調用回調函數
  const responseData = "Data from " + url;
  setTimeout(function () {
    callback(responseData);
  }, 1000);
}

makeAjaxRequest("url1", function (data1) {
  makeAjaxRequest(data1, function (data2) {
    makeAjaxRequest(data2, function (data3) {
      makeAjaxRequest(data3, function (data4) {
        makeAjaxRequest(data4, function (data5) {
          makeAjaxRequest(data5, function (data6) {
            makeAjaxRequest(data6, function (data7) {
              makeAjaxRequest(data7, function (data8) {
                makeAjaxRequest(data8, function (data9) {
                  makeAjaxRequest(data9, function (data10) {
                    makeAjaxRequest(data10, function (data11) {
                      makeAjaxRequest(data11, function (data12) {
                        makeAjaxRequest(data12, function (data13) {
                          makeAjaxRequest(data13, function (data14) {
                            makeAjaxRequest(data14, function (data15) {
                              makeAjaxRequest(data15, function (data16) {
                                makeAjaxRequest(data16, function (data17) {
                                  makeAjaxRequest(data17, function (data18) {
                                    makeAjaxRequest(data18, function (data19) {
                                      makeAjaxRequest(data19, function (data20) {
                                        console.log(data20);
                                      });
                                    });
                                  });
                                });
                              });
                            });
                          });
                        });
                      });
                    });
                  });
                });
              });
            });
          });
        });
      });
    });
  });
});
```

todo: google "call back hell"  
[波動拳支援](https://lidemy5thwbc.coderbridge.io/2022/08/01/%E5%B7%A2%E7%8B%80%E6%95%91%E6%98%9F%E4%B8%89%E9%83%A8%E6%9B%B2(1)-%E5%BE%9E-callback-hell-%E5%88%B0-promise-chain/)

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

這樣可以讓我們的程式碼更簡潔、更易讀、更易維護

日常生活類比舉例
我們可以把 promise 比喻成訂購外送餐點的過程，當我們打電話訂購時，店家會給我們一個預計送達的時間，這就像是建立一個 promise 物件
然後我們可以繼續做自己的事情，不需要等待餐點送到才繼續執行下一個動作，這就像是非同步操作
當餐點送到時，我們可以拿到餐點並享用，這就像是 promise 狀態變成已實現時執行 then 方法中的函式
如果餐點沒有送到或送錯了，我們可以打電話投訴或取消訂單，這就像是 promise 狀態變成已拒絕時執行 catch 方法中的函式

## Array操作
使用 Array Functions 提高代碼效率
JavaScript是一門功能強大的語言，具備處理數組（Arrays）的豐富功能。隨著ECMAScript 5和更高版本的發展，引入了一系列內建函數，稱為Array Functions，以簡化和增強數組操作。這些函數包括filter，map，reduce等，它們不僅提供更清晰的代碼結構，還能提高效率。本文將介紹這些函數，以及它們的常見用法。

1. filter - 過濾數組
filter函數用於過濾數組中的元素，並返回符合特定條件的元素集合。這是一個強大的功能，用於篩選出所需的數據。
```js
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const evenNumbers = numbers.filter((num) => num % 2 === 0);
console.log(evenNumbers); // [2, 4, 6, 8]
```
2. map - 轉換數組
map函數允許你對數組中的每個元素應用一個轉換函數，並返回轉換後的結果。

```javascript
Copy code
const names = ["Alice", "Bob", "Charlie"];
const nameLengths = names.map((name) => name.length);
console.log(nameLengths); // [5, 3, 7]
```
3. forEach - 迭代數組
forEach函數允許對數組中的每個元素執行操作，但不返回新的數組。
```javascript
Copy code
const fruits = ["apple", "banana", "cherry"];
fruits.forEach((fruit) => console.log(fruit));
```
4. find - 查找元素
find函數用於查找數組中第一個滿足特定條件的元素。
```javascript
Copy code
const people = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 35 },
];

const person = people.find((p) => p.age === 30);
console.log(person); // { name: "Bob", age: 30 }
```
5. some 和 every - 條件檢查
some函數用於檢查是否數組中的某些元素滿足特定條件，而every用於檢查是否所有元素都滿足條件。
```javascript
const numbers = [1, 2, 3, 4, 5];
const hasEven = numbers.some((num) => num % 2 === 0); // true
const allEven = numbers.every((num) => num % 2 === 0); // false
```
6. reduce - 聚合數組
reduce函數用於將數組的所有元素聚合為單一值。這對於計算總和或找到最大/最小值非常有用。

```javascript
Copy code
const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((accumulator, current) => accumulator + current, 0);
console.log(sum); // 15
```
請熟練使用[Array 常用方法](https://blog.tigernaxo.com/posts/javascript/js-arr-func/)
## Object 操作
請熟練使用[Object 常用方法](https://blog.tigernaxo.com/posts/javascript/js-obj-func/)
## 原型鍊
請熟悉[Javascript 原型鍊](https://blog.tigernaxo.com/posts/javascript/js-prototype/)
## Reference
 -[Javascript patterns](https://www.freecodecamp.org/news/javascript-design-patterns-explained/)
 -[Asynchronous JavaScript/Promise ( async/await vs then )](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous)