## 新增搜尋區
### RWD
|code|range|
|-|-|
|xs|<600px|
|sm|600px><960px|
|md|960px><1280px|
|lg|1280px><1920px|
|xl|1920px><2560px|
|xxl|>2560px|
## Table
## 預設樣式
統一調整預設樣式，避免專案元素充滿相同屬性綁定。
```js 
// src/plugins/vuetify.js
createVuetify({
  defaults: {
    VCard: {
      VBtn: { variant: 'outlined' },
	  /* 以下都是合法的作法
      class: 'text-none',
      style: 'text-transform: none;',
      style: [{ textTransform: 'none' }],
	  */
    },
	// 巢狀的寫法也合法，可以指定深層元素預設值
	MyComponent2: {
      MyComponent: { foo: 'baz' },
    }
  },
})

```
## Reference
- [Vuetify-Contextual Defaults](https://vuetifyjs.com/en/features/global-configuration/#contextual-defaults)