<!-- ---
layout: page
--- -->

# 插槽(Slot)
假設有一輛普通的汽車內飾，它包括座椅、方向盤、控制面板等元素。更換這輛汽車的內飾讓汽車看起來與眾不同。可以解釋插槽思想：
1. 座椅插槽：不同顏色、材質的座椅套件插入這個插槽中。例如：插入紅色皮革套件，使座椅變成紅色；插入藍色絲綢套件，使座椅變成藍色。
2. 方向盤插槽：在方向盤插槽中插入不同樣式的方向盤套，例如：木質紋理、碳纖維材質等，以改變方向盤的外觀。
3. 內飾顏色插槽：在內飾顏色插槽中插入不同的顏色選項，例如黑色、銀色或金色，以改變整個內飾的主要色調。

![](https://vuejs.org/assets/slots.dbdaf1e8.png)

```vue
<!-- parent component -->
<template>
  <FancyButton>
    <!-- 把文字作為 slot content 插入 FancyButton -->
    點我!
  </FancyButton>
</template>
```

```vue
<!-- child component -->
<template>
  <button>
    <!-- 沒有指定名稱就是 default slot -->
    <slot>
      <!-- 如果父元件沒有指定 slot 的內容，會顯示預設值 -->
      預設值
    </slot>
  </button>
</template>
```
[試試看](https://play.vuejs.org/#eNqNU89P1EAU/lfGXjhIOzF4ca0EMZjoQY167KXbzu4W22kzM13WbDYx4AYlGAkHNWRjNPEHF0A8kIj439CunPwXfDNddqdVCD31fW/e9773Zr6ucTNJrHZKjJphXzJNlLiMUIG8OEpiKv9Mc9ahtiBRErqCwD9C9m2Xek/nUyFiqgCAZG2+tpa/Wc123h7/GgyXDxEPY8lEheTJX29m/c9IKy2oZXW3i1x0GV1DvZ7ix+UGNtbaQ8g9FiQCcSLSBJAApDJRYm6wOEJTls4jh5y67lDQwwW0u4GuQGTjgmzWmDYKHjNyE2uRxxQ20pVqnFGCO0YNKURiwCZjx2gJkfAaxp5PocwnYdBmFiUC0yTCc3AMs5SKICKmH0dzM9aMdRX7ARc6bBEemXUWL3HCgMQxprU2GMA2YSbci08YYRdtWynTW1dS/7SX3eEmerAUwWFhjaBZWYl8H0FI2P1EBLDQ0mrcMIyX7ipMsJSMZ/FaxHvyH3yRd4qZHjCilGnzC5c1iSjSC4/ukQ78j5NR7Kfh6BrOSD4kPA5TqbE4Np9SH2Rr55TaO+qGA9p8zBc68Fz56VBSqNqGOq/u49Y5o0/kwra1LVbeIezRYfD4pGm8VhD6Fb/J3OTJQ6QsVh/5YRRPbPd9Mx+8zNdXs92tbOPVcHs/+7afv9tDPmm4aQhGkT4c8Y4rJVhCxnzZl+X8/WD44iDrrxz/PNDpC6rh1vOs/zXb/fHnaD0frJx83Bt+Ojz5sPF7eyd7dlTtJL9xsiQBlzTYWBtQt7wMy5YHpLBxvbCxKjg1cu8vSZC+EQ==)

## 存取範圍

Expressions 存取範圍：

- 寫在 parent template 裡面的 expression 只可存取 parent scope
- 寫在 child template 裡面的 expression 只可存取 child scope
- 寫在 parent template 裡面待插入 slot 的語法只可存取 parent scope

## 具名插槽

![](https://vuejs.org/assets/named-slots.ebb7b207.png)

```html
<div class="container">
  <header>
    <slot name="header"></slot>
  </header>
  <main>
    <slot></slot>
  </main>
  <footer>
    <slot name="footer"></slot>
  </footer>
</div>
```

```html
<BaseLayout>
  <!-- v-slot:header 把內容綁定到名稱為 header 的 slot -->
  <template v-slot:header>
    <h1>Here might be a page title</h1>
  </template>

  <!-- 沒有包裹的內容預設會顯示在 default slot 裡面 -->
  <p>A paragraph for the main content.</p>
  <p>And another one.</p>

  <!-- #footer 把內容綁定到名稱為 footer 的 slot -->
  <template #footer>
    <p>Here's some contact info</p>
  </template>
</BaseLayout>
```

[試試看](https://play.vuejs.org/#eNqNVM1OFEEQfpV2PHBhZmLwtI4bwJCoMWrU416amdqdxpnuSXfPgiEc/CFRognxSDARMZGL+HMwgfeZXXgLq3sGtndZ0Ft3/Xz19ddVte4tFEXQL8FredE13ycFlcA1iUVeCG5Ovt/u8EhDXmRUA54JiRapggf0hSi1vaPFpPZ9lQndSoEmIMlga6va/FYdHg3/vKwOd6q3P6vtD8ODX8NXx6QJGe68ISalrmFxzuqMgzVe9Kc32ndBAslZL9VkGQhFxj0gmukMohDdDVDoMHY4Dn5/HOy+q95vnuwfYfma4enn7ZOD74Pd16d7P4Zfj6vdA5JAl5aZrumd7O+dfvrisCzaC0Yo2pO0SElXSKJT5EQZR+G4RtmCKCycaJ4QygUGSYKqNk6H1vWuEPofojUhV4nWwIzkKqxaM4ookYPlRmNNGO8Kh58rlbmO/e6EkJGKJStQF9ClAWDYJlKTUQrpSpGTmcBBMe01c8tA1cltb9ar8/ycFsGKEhy7b90U7zQO1fFaxFqMDfPNveOlWheqFYZxwjEtgYz1ZcBBh7zIw3kMC2XJNcvBT0Q+PxfMBTfDhCntmgNQub8sxaoCiSAdb9YpE6KxD9LHGcC2A/m/ZSfS3NITrgvlTfWNDt9AUbTCH+qy3oQkZhZZBvJRoZng49LQLBOr961NyxLO3xKnED+fYl9Ra/WbHkuwzJz3ayp7oGv30tOHsIbnc2cukjJrvuES5xNQIisNxzpsseQJ0nbiLNt79ocZ7z1TS2s4K+rsUYaoVcPG2/+4c8XTR3RRbUfF8cZDGTsSe89MWZyyLJlYbcY36nC82ZFIWJ/EGVXqtpEfp4Zx85DzgHoXNbvJsVm7nU5Oc8DkOgYzsfnRPA4QTkGIzBaZjjkd40J8dLYEruJVx1zGawIhwk7u11KNtoG38RdLcCpa)

## 動態插槽名稱

可以用程式動態指定內容要插在哪個 slot：

```html
<base-layout>
  <template v-slot:[dynamicSlotName]> ... </template>

  <!-- with shorthand -->
  <template #[dynamicSlotName]> ... </template>
</base-layout>
```
[試試看](https://play.vuejs.org/#eNqNVM9P1EAU/lfGJmYh0FaCJywbxHDQGDTijXIo7dvdQjvTzEwXyGYTokEwHEg0miiEoyQeCFxMJPLf2I3+F76Z2R/dZSGeOvPeN9/73teZ17IeZ5nTzMGas7x7tk2ygAOVJGRpxqha2XbVp56ENEsCCbgmxFsMBDwPdlgu9R4jvTxp2iJhcm412qFBGocruFkOUljrAhGaVf/ufil2D4u9s+L8Z3H4qbN32Lm8Ks6/dk7eFufvO0cfOp9/FR+/I0atz649N+vVcYeFuCNKvPVcSkbJQpjE4ea8b4WNgNbBt6rFwX7n6LjVarc914BUW2U63IqQx5kkAmSuKsboAZekRTjUprUluYSItEmNs5RU0LVKHzQQ0s06JW3K4MojVSJkVEgyYg6Z75NPTEyS+SpRHorVmEaw7TSDJIe1yd5ZncITq5UGBBHwyjSpRFAL8kSqZY0xicG1HlxzIBxbmJhBEtclkkXMxKemyO/rd8W3N53Tkz8/9or9K0PvJEDrskGKi8vi+LQ4uCAPenzGUCQ0QidKGlWwvJ0iM5Pk/hAjCvBc43LVmraMd3YaZM6GYBTvYEv9Rb+bEL41R3RExdBDtfethpSZmHPdMKJ4LIIkbnKHgnRplroLCHN5TmWcgh2xdGHWmXUeulEsZDnsgEjtdc62BHAk8a3pUhkXg03gNr4ENBj4/5YdOVYuPZK6UV5Vb/u0jaZIgU7X4vqIJeqGxAnwF5mM8U8MWRMkCdt6pmOS59DvJWxAuDkmviG2TU8vOWhlpf5lwOsgTXppZRm2cd1PpizKk+5vuCX5CgRLcqXRwBZzGqHsEk6rfar/cEzrr8XStgQqek0podoNjdf/48kdrQ/kotslF4cfH9roc7x7asKFjTiJRgacyg1GAe70sIniJgmTQAg1SBiVQUxVI32ABplXOBTTcXXtCT5zwMMGgyeJWek3gdNLfYbZ3DF0XoqFxxeodl++JhzLd+OsZybE3YINBgWbxe30I2Qe3vamsXMwWq32P72wOS8=)

## 作用域插槽(scoped slot)

簡單說：為了讓 slot content 拿到 child 的內容，會讓 child 綁定屬性再做使用，有點像反向注入，在 UI Framework 的元件內大量被使用，必須了解這個才能讀 quasar、vuetify 等等框架的文件。
![](https://vuejs.org/assets/scoped-slots.1c6d5876.svg)

```html
<!-- child -->
<div>
  <slot :text="greetingMessage" :count="1"></slot>
</div>
```

```html
<!-- parent -->
<!-- child 綁定的所有屬性會變成一個物件，這裡把它命名 slotProps -->
<template v-slot="slotProps">
  <!-- 這時候可以透過 slotProps 拿到子元件綁定的屬性 -->
  {{ slotProps.text }} {{ slotProps.count }}
</template>
```

通常搭配解構賦值使用。

```html
<!-- parent -->
<!-- 父元件只需要少數特定的屬性時，可透過解構賦值直接拿到特定屬性 -->
<template v-slot="{ text, count }">
  <!-- 使用時不需每次都透過最上層 slotProps -->
  {{ text }} {{ count }}
</template>
```

[試試看](https://play.vuejs.org/#eNqNU8tu00AU/ZVhNt3EtlBZhVKVVhUCIaiApTfGvk1c7JnRzHUaFEVKeUhISJRtumJTseG56aaq+Jk4Vf6CO2M3ccJD3c09933mngG/q5TfK4C3+cYNz2Mq0iCQxTJXUtiX522GYgMhV1mEQG/GNrYjAw+jl7JAZxNy5Wc9z2QS74R8gNDHFhUqBA5DXgdSqO0yG42n41flaFwef5+cn85Gx7OjD8xm7mmpDJu+/1W++1F+/Vi+fT05P7s8Oyq/nVyevCl/fpmOPlczVeXuaQBMRafNBgNmW7LhsMV2bFcHuf6E1XMGy4sES5sseck0sU4VMgNYKEJSokQjW6SwfS1ztuY3qlgq127bUlXyJm/xKs/LI+UfGCmI6YFtHtYOE3KatJov5JRv7ZB3EZVpB0GcCEpLIEt72heAgVB5sEVhgabN0hy8ROZb6/66fytIUoNN2AeTe8+1PDSgqUjIW402AYE90B79dwIa9HXbrqQ1W6+4/mhvu9NPDIkUNLEU+2lnhRJ7d2kG+rHCVIplaqIsk4cPHIa6gPkucRfiF3/BD0y/2mlPg5ussT9GugNYuXefPqK7aThzmRRZ/Q3/cD4BI7PCzliFbRciobEbcW7a++6H6Tyfmd0+gjBXS9lBHRsu3v3Hzn9WX4xLbDdYXD48ojHUdHtWYXE3zZIVGVvf4sLJmuuxiq5jHJqkvbnhACtOJzDS9uTiU3l6EXLWdvIi5CYpnG6eYhYl6CaqGk1dWbOWxkIjw9/w5ZYp)

## Summary
1. 插槽可以有預設值。
2. 插槽名稱
    - 插槽名稱可以是字串或動態綁定。
    - 沒有名稱的插槽稱為預設插槽
    - 多個預設插槽父元件需按照順序插入。
3. 插槽作用域
    - 父元件插入插槽的內容只能存取父元件的狀態。
    - 作用域插槽能讓子元件提供狀態給插槽內容使用。
    - 作用域插槽取值常搭配解構賦值。
## Reference

- [Vue.js-Slots](https://vuejs.org/guide/components/slots.html)
