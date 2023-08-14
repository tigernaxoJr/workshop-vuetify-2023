# 節流(throttle)與防抖(debounce)

節流（throttle）與防抖（debounce）是兩種常見的前端性能優化技術，用於處理頻繁觸發的事件，如滾動事件、鼠標移動事件或輸入框內容改變事件等等，減少事件處理函式被呼叫的次數，提升用戶體驗和網頁性能。

 - 防抖(Debounce)：多次觸發視為一次事件，並延遲執行。
 - 節流(throttle)：設置單位時間只執行一次。

## 防抖（Debounce）

"Debounce" 概念來自於按鈕開關彈跳（bounce），按鈕按下時，由於物理原因可能會彈跳幾次，但我們只想在最終的穩定狀態下處理這個事件。

在網路開發中，"Debounce" 將此概念應用於制事件處理頻率，避免過多的計算：設定時間間隔（等待時間），在這個時間間隔內如果同樣的事件再次觸發，則重新計時。只有在等待時間內沒有新的事件觸發時，才會執行相關的處理函數。

這對於一些情況非常有用，例如：

 - 搜索欄自動完成： 在用戶輸入時，僅在他們停頓一段時間後才觸發實際的搜索請求，以減少不必要的請求。
 - 視窗大小調整： 在視窗大小調整時，僅在調整停止一段時間後，重新計算佈局和更新內容。
 - 滾動事件： 在滾動頁面時，僅在停止滾動一段時間後處理相關的事件，以減少處理的次數。

```js
// 防抖函數的實現
function debounce(func, delay) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
}

// 用於處理輸入框內容改變事件的處理函數
function handleInputChange(event) {
  console.log('輸入框內容改變事件處理中...', event.target.value);
}

// 使用防抖函數來綁定處理函數
const debouncedInputChange = debounce(handleInputChange, 500);

// 監聽輸入框內容改變事件，但實際上只有在用戶停止輸入500毫秒後才會執行一次處理函數
const inputElement = document.getElementById('inputElement');
inputElement.addEventListener('input', debouncedInputChange);
```

## 節流（Throttle）

與 "Debounce" 類似，"Throttle" 也用於處理連續觸發的事件，但它的方法有所不同。
"Throttle" 的概念類似於自來水管道的節流閥，限制流量。在特定時間間隔內，無論事件觸發了多少次，只執行一次相關的處理函數。這可以有效地減少事件處理的次數，從而避免性能問題或過多的處理。
"Throttle" 在一些情況下非常有用，例如：

 - 滾動/拖拽事件處理：用戶可能快速連續地滾動頁面，瀏覽器可能不斷觸發滾動事件，這時候可以使用節流來控制滾動事件的處理頻率，從而減少性能消耗。
 - 鍵盤輸入事件：用戶不斷輸入關鍵詞，我們可以使用節流來限制 Ajax 請求的頻率，避免過多的請求發送。

```js
// 節流函數的實現
function throttle(func, delay) {
  let lastTime = 0;
  return function (...args) {
    const currentTime = new Date().getTime();
    if (currentTime - lastTime >= delay) {
      func.apply(this, args);
      lastTime = currentTime;
    }
  };
}

// 用於處理滾動事件的處理函數
function handleScroll() {
  console.log('滾動事件處理中...');
}

// 使用節流函數來綁定處理函數
const throttledScroll = throttle(handleScroll, 1000);

// 監聽滾動事件，但實際上只有每隔1000毫秒（1秒）才會執行一次處理函數
window.addEventListener('scroll', throttledScroll);
```

