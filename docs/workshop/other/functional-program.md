# 函數式程式設計
Functional Programming (FP) 是一種編程範式(paradigm)，它強調使用純函數(pure function)和不可變數據結構(immutable data structure)來寫程式。FP 的優點有：

- 減少錯誤、bug，因為純函數不會產生副作用，也不會修改外部狀態。
- 提高可讀性和可維護性，因為純函數的輸出只取決於輸入，不受外部因素影響，所以更容易理解和測試。
- 提高可控數據流，因為純函數可以任意組合成新的函數，並且保持其純度和不可變性，所以可以更靈活地處理數據流。

JavaScript 是一種多範式的語言，它支持 FP 的特性，例如：

- 使用箭頭函數 (arrow function) 簡化函數的定義和語法。
- 將函數作為一級公民，可以將函數作為參數傳遞或作為返回值返回。
::: details 函數作為一級公民
js
指函數可以像其他類型的值一樣被賦值、傳遞或返回：
```js
// 1. 將函數賦值給變量
const add = (a, b) => a + b;

// 2. 將函數作為參數傳遞給另一個函數
const multiply = (x, y) => x * y;
const apply = function(f, x, y) => f(x, y);
console.log(apply(multiply, 3, 4)); // 12

// 3. 將函數作為另一個函數的返回值
const makeCounter = () => {
  let count = 0;
  return () => {
    count++;
    return count;
  };
};

const counter = makeCounter();
console.log(counter()); // 1
console.log(counter()); // 2
```
:::
- 使用高階函數 (higher-order function) 來抽象和封裝邏輯，例如 map, filter, reduce 等。
::: details 高階函數
高階函數（higher-order function）是一種可以接收或返回另一個函數的函數，它可以實現抽象化、模組化和函數式編程的效果。
Array.prototype.map()就是一個高階函數，它接受一個函數作為參數，並對陣列中的每個元素執行該函數，返回一個新的陣列。
下面是一個用js寫的高階函數的例子：
```js
const double = (num) => num * 2;
let arr = [1, 2, 3, 4, 5];
let newArr = arr.map(double);
console.log(newArr); // [2, 4, 6, 8, 10]
```
:::
- 使用閉包 (closure) 來實現私有變量和模擬模組。
::: details 閉包
- `閉包 (closure)` 是一種函數，可以記住它被創建時的環境，也就是說，它可以訪問它所在的外部函數的變量和參數。閉包可以實現私有變量和模擬模組。
- `私有變量`是指只能在一個函數內部訪問，而不能被外部訪問的變量。
- `模擬模組`指用 js 實現類似於其他語言中的模組或包的功能，也就是說，可以將一些相關的代碼組織在一起，形成一個獨立的單元，並且可以控制哪些代碼是對外暴露的，哪些代碼是隱藏的。
  

例如，我們可以定義一個立即執行函數表達式 (IIFE)，它會返回一個物件，這個對象包含了我們想要暴露給外部的代碼，而函數內部則可以定義一些私有的變量或函數，這些只能被內部使用，而不能被外部訪問。這樣，我們就創建了一個模擬的模組以及私有變量。例如：

```js
// 定義一個立即執行函數表達式，它返回一個對象，這個對象就是我們的模組
let mathModule = (function() {
  // 這裡的 PI 就是一個私有變量，只能被內部的函數訪問
  let PI = 3.14;
  // 返回一個對象，包含了我們想要暴露的函數
  return {
    // 這個函數可以計算圓的面積，它可以訪問 PI 變量
    areaOfCircle: function(r) {
      return PI * r * r;
    },
    // 這個函數可以計算圓的周長，它也可以訪問 PI 變量
    circumferenceOfCircle: function(r) {
      return 2 * PI * r;
    }
  };
})();

// 使用模組中的函數
console.log(mathModule.areaOfCircle(5)); // 78.5
console.log(mathModule.circumferenceOfCircle(5)); // 31.4
// 嘗試直接訪問 PI 變量
console.log(mathModule.PI); // undefined
```

從上面的例子可以看出，使用閉包的好處：
 2. 減少全域變量的使用，避免命名衝突和污染全局作用域。
 1. 保護數據的安全性和完整性，避免被外部修改或污染。
 3. 提高代碼的可讀性和可維護性(將相關的數據和行為封裝在一起)。
 4. 實現代碼的模組化、結構化、抽象和隱藏，提高代碼的重用性和可測試性。
:::
- 使用柯里化 (currying) 和偏函數 (partial application) 來創建特定用途的函數。
::: details 柯里化
柯里化（currying）是一種將多參數函數轉換為單參數函數的技術，它可以實現函數的部分應用（partial application），也就是預先固定一些參數，返回一個新的函數，等待剩餘的參數傳入。柯里化的好處是可以創造一些通用的函數，減少代碼重複，提高可讀性和可維護性
```js
// 定義一個兩個參數的函數
function add(x, y) {
  return x + y + z;
}

// 定義一個柯里化的函數
function curry(fn) {
  // 獲取原始函數的參數個數
  let arity = fn.length;
  // 創建一個接收參數的數組
  let args = [];
  // 返回一個新的函數
  return function curried() {
    // 將當前傳入的參數合併到數組中
    args = args.concat(Array.from(arguments));
    // 如果參數個數小於原始函數的參數個數，則繼續返回新的函數
    if (args.length < arity) {
      return curried;
    } else {
      // 否則，調用原始函數並返回結果
      return fn.apply(null, args);
    }
  };
}

// 使用柯里化的函數對add進行轉換
let curriedAdd = curry(add);

// 測試不同的調用方式
console.log(curriedAdd(1, 2, 3)); // 6
console.log(curriedAdd(1)(2, 3)); // 6
console.log(curriedAdd(1, 2)(3)); // 6
console.log(curriedAdd(1)(2)(3)); // 6
```
:::
- 使用純函式實現不可變數據結構、避免副作用。
::: details 不可變數據結構
意味著一旦建立了一個資料結構，例如陣列或物件，就不能對它進行修改，每次操作都會回傳一個新創建的資料結構，原本的資料保持不變。
```js
let arr = [1, 2, 3, 4, 5]; // 原本的陣列
let newArr = arr.map(x => x + 1); // 使用 map 函式回傳一個新的陣列
console.log(arr); // [1, 2, 3, 4, 5] 原本的陣列沒有改變
console.log(newArr); // [2, 3, 4, 5, 6] 新的陣列儲存了修改後的資料
```
同理，如果我們想要過濾掉一個陣列中小於三的元素，我們可以使用 filter 函式，如下：
```js
let arr = [1, 2, 3, 4, 5]; // 原本的陣列
let newArr = arr.filter(x => x >= 3); // 使用 filter 函式回傳一個新的陣列
console.log(arr); // [1, 2, 3, 4, 5] 原本的陣列沒有改變
console.log(newArr); // [3, 4, 5] 新的陣列儲存了過濾後的資料
```
最後，如果我們想要對一個陣列中的所有元素進行某種計算，並得到一個單一的結果，我們可以使用 reduce 函式，如下：
```js
let arr = [1, 2, 3, 4, 5]; // 原本的陣列
let sum = arr.reduce((acc, x) => acc + x); // 使用 reduce 函式回傳一個數值
console.log(arr); // [1, 2, 3, 4, 5] 原本的陣列沒有改變
console.log(sum); // 15 新的數值儲存了陣列中所有元素的和
```
:::