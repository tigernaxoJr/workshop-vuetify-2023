# 網格系統(Grid System)
網格系統用於網頁版面的分割、組織，目前前端UI框架(例如 Bootstrap、Vuetify 等)的網格系統多數採用了Flex布局，三種主要的布局方式分別是：

| 布局方式 | 概念                                                                                                      | 相容性                                                                                                                         |
| -------- | --------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| Float    | 將元素浮動到左側或右側實現多列布局。                                                                      | 較早的網頁佈局技術，可以支援較古老的瀏覽器(甚至包括IE 9)。                                                                     |
| Flex     | 基於「彈性盒子」概念，使得元素在**一個維度**上靈活排列、對齊和分佈。                                      | 當前**主流布局技術**                                                                                                           |
| Grid     | 基於網格和單元格的概念的**多維度***布局方式，元素可以在水平和垂直方向上同時進行精確的位置控制和大小調整。 | 現代瀏覽器中得到廣泛支援，但在舊版本的瀏覽器上相容性可能較差。然而，它被視為未來的主要布局方式，因為它提供了更大的彈性和控制。 |

學習目標：
- 學會 flex
- 學會使用網格系統

## 彈性佈局模式(Flexbox)
口訣：
 1. [列]`方向`，決定子元素排列方向，預設為水平。   
 2. [行]`百分比`，子元素是否有設置百分比，有設置百分比的話就不理會伸縮。
 3. [行]`伸縮`，子元素是否有設置伸縮，將決定如何分配剩餘空間，通常使用 `grow` 讓子元素在有剩餘空間時自動伸展。
 4. [行]`基底大小`，子元素都沒有設置以上屬性(2, 3)的話，直接套用子元素的基底大小。

### flex-direction: 
 ![](/flex.png)

### 基本設置
使用Flex佈局的基本設置：  
 1. 設置容器的display屬性為flex或inline-flex，將容器元素定義為Flex容器（flex container）。
 2. 將容器內的元素設置為Flex項目（flex item），並指定它們的佈局規則。

| css 屬性                | 預設值                 | 說明                                                           |
| ----------------------- | ---------------------- | -------------------------------------------------------------- |
| flex-basis<br>基礎大小  | auto<br>由元素內容決定 | 指定網格元素初始大小。                                         |
| flex-grow<br>增長因子   | 0<br>不增長            | 每個網格元素依照增長因子比例分配剩餘可用空間。                 |
| flex-shrink<br>收縮因子 | 1                      | 指定初始大小相加超出可用空間時，每個網格元素等比例縮小的權重。 |

[MDN-flex grow](https://developer.mozilla.org/en-US/docs/Web/CSS/flex-grow)
[MDN-flex shrink](https://developer.mozilla.org/en-US/docs/Web/CSS/flex-shrink)

```css
/*
 ====== 1. 將容器元素定義為Flex容器（flex container）======
 */
.container {
  display: flex; /* 或 inline-flex，取決於需要 */
}

/*
 ====== 2. 指定容器內的元素的佈局規則。======
*/
/* 佔去固定寬度100像素 */
.item1 { width: 100px; }
/* 佔去固定比例 1/12 */
.item2 { width: 8.333333%; }
/*
  增長因子(flex-grow)
  如果一個元素的增長設置為1；而其他元素設置為0，當有剩餘空間時，該元素增長而其他元素保持不變。
  如果所有列都設置為1，它們將平均分享額外的空間。
*/
.item3 { flex-grow: 1; }
/* 
  收縮因子(flex-shrink)
  如果一個列的收縮因子設置為1，而其他列都設置為0，當可用空間不足時該列將縮小，其他列將保持不變。
  如果所有列都設置為1，它們將平均收縮以適應缺少的空間。 
*/
.item4 { flex-shrink: 0; } /* 不允許收縮 */

```
### flex shorthand property

```css
.item {
  /* Three values: flex-grow | flex-shrink | flex-basis */
  flex: <flex-grow> <flex-shrink> <flex-basis>;
  /* Two values: flex-grow | flex-basis */
  flex: <flex-grow> <flex-basis>;
  /* Two values: flex-grow | flex-shrink */
  flex: <flex-grow> <flex-shrink>;
}
```

[MDN-Shorthand Properties](https://developer.mozilla.org/en-US/docs/Web/CSS/Shorthand_properties)

## 彈性網格系統(Flex Grid System)
以 bootstrap 為例，經典的網格系統長這樣(實際拿出來看)：
```css
.col { flex: 1 0 0%; } /*增長因子為 1，會長大*/ 
/* col-1 ~ col-12 固定百分比 */
.col-auto{flex:0 0 auto;width:auto}
.col-1{flex:0 0 auto;width:8.33333333%}
.col-2{flex:0 0 auto;width:16.66666667%}
.col-3{flex:0 0 auto;width:25%}
.col-4{flex:0 0 auto;width:33.33333333%}
.col-5{flex:0 0 auto;width:41.66666667%}
.col-6{flex:0 0 auto;width:50%}
.col-7{flex:0 0 auto;width:58.33333333%}
.col-8{flex:0 0 auto;width:66.66666667%}
.col-9{flex:0 0 auto;width:75%}
.col-10{flex:0 0 auto;width:83.33333333%}
.col-11{flex:0 0 auto;width:91.66666667%}
.col-12{flex:0 0 auto;width:100%}
```
## Vuetify 網格系統

| 元件     | 作用                                                                                                                                                               | 重要屬性          | 替代 1.x 的內容 |
| -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------- | --------------- |
| v-row    | 宣告 flex 容器，包裝v-col                                                                                                                                          | dense, no-gutters | v-layout        |
| v-col    | 必須是 v-row 的直接子元素                                                                                                                                          |                   | v-flex          |
| v-spacer | 分配剩餘的寬度，子元件之前或之後放置單個 v-spacer 時，這些元件將推向其容器的右側和左側。當在多個元件之間使用多個 v-spacer 時，剩餘的寬度將均勻分佈在每個間距之間。 |                   |                 |

## Breakpoints
| code | range          |
| ---- | -------------- |
| xs   | <600px         |
| sm   | 600px><960px   |
| md   | 960px><1280px  |
| lg   | 1280px><1920px |
| xl   | 1920px><2560px |
| xxl  | >2560px        |

## 常用搜尋區 RWD
```html
<v-row>
  <v-col cols="12" md="6" lg="3">搜尋框1</v-col>
  <v-col cols="12" md="6" lg="3">搜尋框2</v-col>
  <v-col cols="12" md="6" lg="3">搜尋框3</v-col>
  <v-col cols="12" md="6" lg="3">搜尋框4</v-col>
  <v-col class="d-none d-lg-block"></v-col>
  <v-col cols="12" md="6" lg="auto">
    <v-btn class="w-100">按鈕</v-btn>
  </v-col>
  <v-col cols="12" md="6" lg="auto">
    <v-btn class="w-100">按鈕</v-btn>
  </v-col>
</v-row>
```
螢幕寬度 {{width}}，效果：

<div class="v-row">
  <div class="v-col-12 v-col-md-6 v-col-lg-3 border">搜尋框1</div>
  <div class="v-col-12 v-col-md-6 v-col-lg-3 border">搜尋框2</div>
  <div class="v-col-12 v-col-md-6 v-col-lg-3 border">搜尋框3</div>
  <div class="v-col-12 v-col-md-6 v-col-lg-3 border">搜尋框4</div>
  <div class="v-col d-none d-lg-block"></div>
  <button class="v-col-12 v-col-md-6 v-col-lg-auto border rounded">搜尋按鈕</button>
  <button class="v-col-12 v-col-md-6 v-col-lg-auto border rounded">搜尋按鈕</button>
</div>

::: info 練習
- 上面的效果。[練習](https://play.vuetifyjs.com/?preview=false#eNqLrlYqLkrWdywo0CsrTVWyUrIpSc0tyEksSbWLyVNQsCnTLcovBzOBHEVdXSirTDc5P0cBiIttY5QMjWKUFHJTgCwzICMnHcgwBjKScxKLQdJJ+UUpqUUxSnbPJsx5uqH72cI2Qxt9sAEwcykzzYiqphlT1TQT7KZB1afo5uXnpSqk6Oak6ybl5CdnA7WSaH1iaUk+NhdAtIMNSCrJg8uX6xoaGIAc2NP5smMqyC6gLMyuQWKzri4k6QEFIWnPRh8pTSrV6igZ6xnrmShBaEMzpVgAmsvk+A==)
:::
## 常用表格 RWD 策略
 - 大螢幕 => 完整表格  
 - 中螢幕 => 減少不重要欄位  
 - 小螢幕 => 卡片清單、可展開細節

<script setup> 
import { ref, computed, reactive, onMounted, onUnmounted } from 'vue'

// width
const width = ref(0);
onMounted(()=>(width.value = window.innerWidth))
const resizeHandler = (e)=> (width.value = window.innerWidth)
let listener;
onMounted(()=> (listener = window.addEventListener("resize", resizeHandler)))
onUnmounted(()=> window.removeEventListener("resize", listener))
</script>
<style > 

</style>
## Reference
- [MDN-Basic concepts of flexbox](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox)
- [Bootstrap 5](https://getbootstrap.com/docs/5.0/getting-started/introduction/)
- [MDN-Shorthand_properties](https://developer.mozilla.org/en-US/docs/Web/CSS/Shorthand_properties)
- [Vuetify-Grid System](https://vuetifyjs.com/en/components/grids/)