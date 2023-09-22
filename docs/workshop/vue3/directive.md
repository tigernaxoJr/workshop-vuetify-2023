# 指示詞 (Directive)
只介紹比較常用的
## Conditional Rendering 
- `v-if`：條件成立才渲染。
- `v-show`：一律渲染，條件成立才顯示，不成立會加上 `style="display: none;"`。
### v-else/v-else-if
```html
<div v-if="type === 'A'"> A </div>
<div v-else-if="type === 'B'"> B </div>
<div v-else-if="type === 'C'"> C </div>
<div v-else> Not A/B/C </div>
```
[試試看](https://play.vuejs.org/#eNqNUstu2zAQ/BWWl7RAJCJIT4ZiuC1cIEXRFnXQEy+KtJKY8AVyZbsw/O9dSo6rOA/kJO3sLHdmyB3/5H2+7oHPeBGroDyyCNj7ubTKeBeQ7ViAhu1ZE5xhZ0Q9k1baytmIrNFly64S4T2GHj5IW4jxFJqnAsF4XSJQVdz2iM6yRaVVdX8l+WH2XfpKPr9xbauhECMtDXQXbJ2p5kAlyp/s+mshuotjE3QEQpffV8tHeOzcZjq2ovqBICaaqIz4VwOLlfNQz0l8Kuf8nI/mM1P6/C46S/HspGVMHhpR8hkbkIRRKKmWvEP0cSZEVVsaq0GrdcgtoLDeiAXRROgtKgNZ7cziMr/MP4paRZzCOUST3Qa3iRDoEMnPJ2sEgWsIWQBbQ4Dw1rUnY9PVJ60n69P2vbR7CgUpJ9uo9iSSyhmvNISfHhU9i0fRlFq7zbcBSy/k6KXqoLp/Br+L29HTrwCDsol/LEMLOLaXqx+wpf9j07i614dreKH5G6LTfdI40j73tibZE96g9nq4YWXbm7jcItj4YCoJHdIY+MN9fHnF+n+5lPYxxf0/ZOwpKA==)


## v-for
用來做清單渲染
- key 屬性不能重複。
- 以 key 判斷清單改變後，是否重新渲染某列表的依據(增進效能)。
- 變動性的資料應該用 id 作為 key。
- 不變的資料可以用 index 作為 key。
```html
<div v-for="item in items" :key="item.id">
  {{ item.text }}
</div>
```
[試試看](https://play.vuejs.org/#eNqNU11rE0EU/SvXBemG7EdLRSEkoVX6oIiK+rgg291JMu3u7DIzm6SEBa1CpSj0QahorRVLwSd98cGi/pt8PfkXvDu7idv6gYHAzL1zzzn33LsDbTWOrW5CtJpWFx6nsQRBZBI3HUbDOOISBsBJywAvCuNEEh9SaPEohAUsWnCYw2wbJu+/TR8eTU4eTd99HB+fjl89ASpJKBzmRUxI4G4PGhmMvsq5u+UwwJ+VwegDCAhry04NlhYXITVAf2AAZT7pV6DRzE9QhaVKURS6sa5TXyWxmPoGhJFfwwNchMuQVir4MmcVHdqSBe/iPNpDyKh3U5Fi8sosrgRjYNanriuOQc5bIEoXDWnkyFbXDRKCrNhdfrbyVvIKji5yVkqKgHpEVxBGgVQ9owYlpvh3WN3OJ4EzwAvqigNXErxluPX1RMqIwYqHeJsNR1NiqlVHa4KigLqdP5kV+LTbHKBVqsE0xXwWKZJJUJzU7YJpDk+2R4cHw5f7kw8no91d2CRbMHrxZbx9qhAsdPvH12fD10dZJEtOd55PjndGB4+H3/eHTz9N3xxOj/ZGB29xC8af9xDLNMsUAYWu2Yo4KtczwArOuNgWDWoIiAlFRH1sqdCdsaL0uh3QmXBbKa/bJXvwKuRWQEB4UUz8JvqYXZuaoeW7bOL2WBsiYrjtarBIpRLIXZuN2tFws7O7o3WkjEXNtj2fYZlPAtrlFiPSZnFor+AzmydM0pCYfhSuLFvL1iX0Vshy2CIiNNd51BOEI4ijGSUaG4Ndwk1OcM854f9Le66sTH0u9Rt9xp7ipqEpEn1iLdo+Z0n2BdCA8NuxpLj2Z6xxgyDq3VAxyRMy78XrEG/zD/EN0c97usOJUlbqHz+BNpF5eu3eLdLH8zyJA0+CYgx/Sd4lIgqSTGP+7GrCfJRdeqfUXlcTpqx9X6z1JWFi1lQmVLmh3qt5XPtH67/kottzF9OfIdDahQ==)

## v-bind/v-on
- `v-bind`: 屬性綁定，縮寫為 `:`(見元件屬性綁定)。
- `v-on`: 事件綁定，縮寫為 `@`。
- 常用修飾詞：  
  - `.stop` - 自動呼叫 event.stopPropagation()，中止事件傳遞。
  - `.prevent` - 自動呼叫 event.preventDefault()，取消事件預設動作。

```html
<button v-on:click.stop="onClick"></button>
```

[試試看](https://play.vuejs.org/#eNqNU8Fu00AQ/ZVlL22l2lYSTlEShaIe4AAIelwJOfY0cWPvrnbHdlCVO6gSR+DAGYmv4GsIfAbjtZ24SVNhWZZn5+28t29nbvkzrf0iBz7kIxuZRCOzgLmeCBkpaZEh0GfMTuGMjScsTMEg/bfZ8CKRMaVvhWT0LAxcD5ngC0Rth0FQlqW/xPnCj1TmYxkIfl4DMTRzwAr6fpaGcim4kGshR0GtgdgpQMh0GiJQVO0ZPfE89vvb178/f2zufm0+f2K+RaXZn+939HpeC4uTgk2jNImWY8Er+acnPa9/ciZ4g3CoWY6oZAN0hTronkOzKwp7bBTU2LZ+QARO4BFR2kABEg90hazwZmQX8TjbBG/Zmx2tgP59qZWKfssdPsbs7Nh8/HJcwwPeDA69Oa60YtiXSxVqv3YVWtmDTlEnvWvgKOhcMIUWP6TAbKQ0xBPqhCqc8HOeZFoZ9LJQ+zdWSepU122iSVjBh23/CU6tXMW7FoxiSdtiSJPC+BIwkDoLpgQLTC4xycCLVTYd+AP/Kemy2F32wWbezKjSgqEi2+51NAEtFmA8AzIGA+Z/afe2dan3Ugf0FTtNyZpMQfJJXifzPUtoznRCM/paY0IDes+aME1V+dKtoclhe5ZoAdHygfUbu6rP9MaAU9Y5fz2/dfry3StY0f82mak4T5trOJJ8C1aleaWxhl3kMibZHZxT+8LdcCLnV/ZyhSBte6hKqHPD4d19PH/k6Du55PbWxfU/t56q9A==)

## v-model
雙向綁定語法糖
```vue
<template>
  <!-- 兩者等價 -->
  <MyComponent :modelValue="count" @update:modelValue="count=$event" />
  <MyComponent v-model="count" />
</template>
<script setup>
import { ref } from 'vue';
const count = ref(0);
</script>
```
[試看看](https://play.vuejs.org/#eNqNVN1qE0EUfpVxEZJCdveiXqVpqEovKqhFpTeuFzF70m7dnR1mZtOWkAtRwVJFBSu1ineWKtReFErFv5fJNvXKV/DM7G5281MxENjz933fOTNzOsZlxqx2BEbVqIkm95gkAmTE6g71AhZySTqEQ4t0SYuHASlhamkQur6xQFkk05Blp7bCK804tBlSIYmEdUlmFUi5VJpyaM1OeJABDQkB8xsS0CL4q10wzdPNrXhrOz7c67/4GT951Pt2/Pvd2/jlq/7xw/jLrmlmqRl7NQhd8JcafgSzjqHoHIPMRcxF2PEYSrkIbaCYVK9ligvs44xnnz+cHm33j96MU7dNjT+gnYhItCN+v0+WIiD97ePeycHZp73+5tf46cf+7uP4YAeDf74/8zRm7+T56c5h78ev/uv9CW3kIlyvnX5qM6mutkfmoN1o657JbD07D21bssGXAQ9MFaH8FNnOoVPYsUYLGjqdBLPbzQprduFY0RRywwcimiEDF0ekzbpRMZJrZAYNZq2KkOId7ChcJw0Ix6gS7VE+vFTKdowVKZmo2nbTpViGqrw2tyhIm7LAnsM0m0dUegGYbhjMTVvT1iXUJWTRbYEIzPs8XBPAEcQxKgUaG51t4CYH6gIH/r+0I2VF6pHQGL1i7zq0i0OROCfa8pZHRtIMA+b5wG8y6eG7GhpNw/fDtWvaJ3kEg16aK9B8MMG/KtaTnhY5aGWF/pMbkYTnb9/Qpz0I4iWI/PQYzgneAhH6kdKYpF2JqIuyC3la7YI+YY8u3xHz6xKoyJpSQvU0dL4+j6v/aD2Xi9MuTLGwisZXGx9ebhWihhtJcIfXHKYlK4zxkAl8My60PAqLyirfLeVvsnRvKk+GwJN58ryyMHnsHQ/VpG8yk1HuqJBq0LYJtidxfqkDrfIUtp+a6sexKU4TkVZOMJPl4CRzNJxAAQ2tMoU1nT+CqtsoT9BdIYOKAYP66Goz++dbPnPkKyGtShZYgfLcXZMVJOtFow+hadfkJdP9C9sJdPI=)

多值雙向綁定
[試試看](https://play.vuejs.org/#eNqtVL1u01AUfpWLFydSbA9lSt2oLcpQJKACxIIZ/HOSutjXV/deJ6kiDwgxoA7AwADsjLB1QeJpCBVvwbn+vUlK6dBIkfyd3+989jlL44Axe5aDMTRcEfKYSSJA5mzk0ThlGZdkSThMSEEmPEuJiaFm63pwdkRZLmuX7dRY1TN3PRpmVEjikz1VoWea/cYU6CbXqfpiRwQSUpb4EhAR/Ll3LOv32/PV+cfV96+X736u3rz+9ePiz5dPq/cfLi9erb59tqwmtGEzs9IsgmTo73mG7xktDhAHnjFyG55NYhTPRv6QLJfItShcR2HNFZSuQHO5jkYToZBnCRARZgwiLF/CkTEwKpms1Gf2qcgoarxUdb3aITwDS1edPANFU9gzTqRkYug4YUQxDZnHM25TkA5lqbOPYQ7PqYxTsKIs3d+xd+y7yEtI3WyDSK2AZ3MBHIt4xkBr46BxBtziQCPgwG/adiNNb73h2mqvuhceLVAUiTrRSTzdkCTMUhYnwB8xGeNHsiaNnyTZ/H5pkzyHdpbwBMKXV9hPxaKa6ZhDyUybX/p8CrJyj588hAU+t078UPKkfg3/cD4GkSW54liFHeY0QtpaXMn2qHzDMZ0+FeOFBCqaoRTRUo0yvnwf964ZvaOLamsqaqu2vbp8fXkHRImbS4jW1xjDqn1kPGMCdzKCSUzhWKHec9M3B2Zgvuh3cZDGsosbK4RxOYtwE4YqvH5cz1IHoCHQWyq7Gs1xCA4mUbnagKjXx8FrqH4cx+G0omf7u40LpeuK4MhaEUQ9CvNnfpLDRrGSfE9jS9rAtrB6KDTq6lDdAvXgVqkH/6Gu/t1RbQzdxaozyttGDvQ+bqwf0Op8dvHV8VvLPrw2Wx3b7Wz9eDbkrj6gxV+exjlZ)
## v-slot
用於指定具名插槽、從作用域插槽獲取屬性。
```html
<!-- 具名插槽 -->
<BaseLayout>
  <template v-slot:header>
    頁首內容
  </template>

  <template v-slot:default>
    預設插槽內容
  </template>

  <template v-slot:footer>
    頁尾內容
  </template>
</BaseLayout>

<!-- 具名插槽接收屬性 -->
<InfiniteScroll>
  <template v-slot:item="slotProps">
    <div class="item">
      {{ slotProps.item.text }}
    </div>
  </template>
</InfiniteScroll>

<!-- 預設插槽接收屬性，並使用解構賦值 -->
<Mouse v-slot="{ x, y }">
  滑鼠位置: {{ x }}, {{ y }}
</Mouse>
```
## Reference
- [Vue.js-Built-in Directives](https://vuejs.org/api/built-in-directives.html)