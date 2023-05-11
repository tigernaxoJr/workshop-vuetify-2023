## SFC
SFC 代表「單一檔案元件」（Single File Component）。它是一種 Vue 框架的組織元件的方法。SFC 允許將一個元件的模板、JavaScript 邏輯和樣式，全部放在同一個檔案中，使元件的結構更清晰和可讀。  

SFC 通常包含以下三個區塊：

- 模板（Template）：這是元件的視覺表示部分，使用 Vue 的模板語法來描述元件的結構和外觀。模板可以包含 HTML 標記和 Vue 的指令，可以綁定資料、處理事件和渲染動態內容。

- JavaScript 邏輯（Script）：這是元件的行為和邏輯部分，使用 JavaScript 或 TypeScript 來實現。在這個區塊中，可以定義元件的屬性、方法、生命週期鉤子（Lifecycle Hooks）等等。它負責處理元件的邏輯和與其他元件或資料的交互作用。

- 樣式（Style）：這是元件的樣式部分，使用 CSS 或預處理器（如 SASS、Less）來定義元件的外觀和風格。可以在這個區塊中指定元件的樣式規則、類別名稱，或使用 CSS 預處理器的變數和混入。
## Fallthrough Attributes
### Transparent Component
`Transparent Component` 是一種代理元件的概念，用於統一系統中的樣式，而不需要在每個元件中重複編寫許多屬性。當需要修改整個系統元件的樣式時，可以直接修改透明元件。。
## Global Component
### 型別檢查支援
Global Component 需定義 GlobalComponents interface 讓 volar 支持 intellisense
| 種類                | 設置                            |
| ------------------- | ------------------------------- |
| Local components    | -                               |
| Built-in components | -                               |
| 原生 HTML 元素      | -                               |
| Global Component    | 定義 GlobalComponents interface |

例子：
```ts
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'
import TextArea from "@/components/TextArea.vue";
import Btn from "@/components/Btn.vue";

declare module '@vue/runtime-core' {  // Vue 3
  export interface GlobalComponents {
    Btn: typeof Btn
    TextArea: typeof TextArea
    VueDatePicker: typeof VueDatePicker
  }
}
```
	https://marketplace.visualstudio.com/items?itemName=Vue.volar#:~:text=Define%20Global%20Components
## Reference
- [Fallthrough Attributes](https://vuejs.org/guide/components/attrs.html)