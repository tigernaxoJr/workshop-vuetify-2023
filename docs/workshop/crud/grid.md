# 網格系統(Grid System)
網格系統用於網頁版面的分割、組織，目前前端UI框架(例如 Bootstrap、Vuetify 等)的網格系統多數採用了Flex布局，三種主要的布局方式分別是：

| 布局方式 | 概念                                                                                                      | 相容性                                                                                                                         |
| -------- | --------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| Float    | 將元素浮動到左側或右側實現多列布局。                                                                      | 較早的網頁佈局技術，可以支援較古老的瀏覽器(甚至包括IE 9)。                                                                     |
| Flex     | 基於「彈性盒子」概念，使得元素在**一個維度**上靈活排列、對齊和分佈。                                      | 當前**主流布局技術**                                                                                                           |
| Grid     | 基於網格和單元格的概念的**多維度***布局方式，元素可以在水平和垂直方向上同時進行精確的位置控制和大小調整。 | 現代瀏覽器中得到廣泛支援，但在舊版本的瀏覽器上相容性可能較差。然而，它被視為未來的主要布局方式，因為它提供了更大的彈性和控制。 |

## 彈性佈局模式(Flexbox)
口訣：
 1. 決定列方向。
 2. 指定行大小、百分比。
 3. 剩餘/不足空間，行伸縮。
### flex-direction: 
 ![](/flex.png)

### 基本設置
使用Flex佈局的基本設置：  
 1. 設置容器的display屬性為flex或inline-flex，將容器元素定義為Flex容器（flex container）。
 2. 將容器內的元素設置為Flex項目（flex item），並指定它們的佈局規則。

|css 屬性|預設值| 說明 |
|-|-|-|
|flex-basis<br>基礎大小|auto<br>由元素內容決定|指定網格元素初始大小。|
|flex-grow<br>增長因子|0<br>不增長|每個網格元素依照增長因子比例分配剩餘可用空間。|
|flex-shrink<br>收縮因子|1|指定初始大小相加超出可用空間時，每個網格元素等比例縮小的權重。|

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
  flex: <flex-grow> <flex-shrink> <flex-basis>;
}
```
[MDN-Shorthand Properties](https://developer.mozilla.org/en-US/docs/Web/CSS/Shorthand_properties)

## 彈性網格系統(Flex Grid System)
以 bootstrap 為例，經典的網格系統長這樣：
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

## 對齊
|項目|對象|說明|
|-|-|-|
|[Align](https://vuetifyjs.com/en/components/grids/#align)|flexbox|把 flexbox 內的元素垂直對齊|
|[Align Self](https://vuetifyjs.com/en/styles/flex/#flex-align-self)|flexitem| 指定 flexbox 內的元素垂直對齊|
|[Justify](https://vuetifyjs.com/en/components/grids/#justify)|flexbox|水平對齊|
|[Auto Margins](https://vuetifyjs.com/en/styles/flex/#auto-margins) |flexitem|自動留空|

## Reference
- [MDN-Basic concepts of flexbox](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox)
- [Bootstrap 5](https://getbootstrap.com/docs/5.0/getting-started/introduction/)
- [MDN-Shorthand_properties](https://developer.mozilla.org/en-US/docs/Web/CSS/Shorthand_properties)
- [Vuetify-Grid System](https://vuetifyjs.com/en/components/grids/)