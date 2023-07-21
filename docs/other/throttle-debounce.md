# 節流(throttle)與防抖(debounce)

節流（throttle）與防抖（debounce）是兩種常見的前端性能優化技術，用於處理頻繁觸發的事件，如滾動事件、鼠標移動事件或輸入框內容改變事件等等，減少事件處理函式被呼叫的次數，提升用戶體驗和網頁性能。

## 節流（Throttle）

限制事件的觸發頻率，即在指定的時間內只執行一次事件處理函數。這樣可以有效地減少事件處理的次數，從而降低了性能消耗，特別是在連續觸發事件時。節流可以保證在指定時間內不會觸發多次事件處理，而僅在時間間隔結束時執行一次。
重要性：節流在處理連續觸發事件時非常有用，特別是在需要優化性能的場景下，例如滾動事件、拖拽事件等。它可以防止過多的計算和渲染，提升用戶體驗和網頁性能。

相關的設計模式：在前端中，可以使用節流來實現的常見設計模式是「時間戳」和「定時器」。時間戳模式是在事件觸發時立即執行處理函數，但在指定時間內不會再次觸發；定時器模式是在事件觸發後設置一個計時器，在指定時間後執行處理函數，而在此期間的事件觸發將被忽略。

前端相關事項：在前端開發中，節流廣泛應用於處理各種頻繁觸發的事件。例如，用戶可能快速連續地滾動頁面，瀏覽器可能不斷觸發滾動事件，這時候可以使用節流來控制滾動事件的處理頻率，從而減少性能消耗。另一個例子是在實現搜索提示功能時，用戶不斷輸入關鍵詞，我們可以使用節流來限制 Ajax 請求的頻率，避免過多的請求發送。

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

## 防抖（Debounce）

事件觸發後，等待一段指定的時間後才執行事件處理函數。如果在這段時間內事件又被觸發，則會重新計時，直到事件處理函數被執行。

重要性：防抖在處理頻繁觸發的事件時非常有用，它可以確保只有在事件停止觸發一段時間後才執行相應的處理函數。這對於一些需要等待用戶停止操作的場景非常實用，例如搜索框輸入建議、窗口大小調整事件等。

相關的設計模式：前端中常見的防抖設計模式是「定時器」。當事件觸發時，設置一個計時器，在指定時間內如果事件未再次觸發，則執行處理函數。如果在此期間事件又被觸發，則重新設置計時器，直到事件處理函數被執行。

前端相關事項：防抖通常應用於一些需要用戶停止操作後才進行相應處理的場景。例如，在實現自動保存功能時，用戶在輸入內容時我們可以使用防抖，確保在用戶停止輸入一段時間後再進行保存操作，避免過於頻繁的保存請求。另一個例子是在窗口大小調整事件中，我們可以使用防抖來控制事件處理頻率，避免過多的計算和重排。

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
