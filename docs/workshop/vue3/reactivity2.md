# 響應性狀態觀察者
- 
## Computed
## watch
## watchEffect
## Summary
- computed：根據響應性狀態產生另一個`唯讀的`響應性狀態
- watch：監聽響應性狀態變化執行相對應的行為，純函式。
  - 明確指定跟蹤對象。
  - 對象可以是`響應性狀態`、包含響應性狀態的 `getter`。
  - 使用 `getter` 跟蹤狀態時，deep 設置為 `true` 才能跟蹤物件屬性，但要注意效能問題。
  - `對象可以是陣列`以跟蹤多個狀態。
  - `immediate: true` 先讓行為立即執行一次，再跟蹤變化 (`do... while 的概念`)。
  - `flush: 'post'` 執行函式在狀態改變的下一個 tick 才執行，可以取得已變化的 `DOM`
  - 使用 handle function 停止跟蹤。
- watchEffect：使用跟蹤的狀態進行其他操作時使用。
  - 跟蹤所有函式內的對象。
  - 跟蹤執行函式內所有響應性狀態，要注意效能問題。
  - `flush: 'post'` 執行函式在狀態改變的下一個 tick 才執行，可以取得已變化的 `DOM`
  - 使用 handle function 停止跟蹤。

## Reference
- [Vue API Reference-Watchers](https://vuejs.org/guide/essentials/watchers.html)
- [Vue API Reference-Computed Properties](https://vuejs.org/guide/essentials/computed.html)