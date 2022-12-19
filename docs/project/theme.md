# 主題設置
## 主題挑色
參考[調色盤](https://next.vuetifyjs.com/en/styles/colors/)、[前一版本調色盤](https://vuetifyjs.com/en/styles/colors/)，
[Material Theme Builder](https://m3.material.io/theme-builder#/dynamic)
```js
// src/plugins/vuetify.js
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Composables
import { createVuetify } from 'vuetify'

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  theme: {
    themes: {
      light: {
        colors: {
          primary: '#1867C0',
          secondary: '#5CBBF6',
        },
      },
    },
  },
})
```
--- 
## Dark Mode
---
## Reference
- [Vuetify-Features-Theme configuration](https://next.vuetifyjs.com/en/features/theme/)
- [Vuetify-Style and animations-Material color palette](https://next.vuetifyjs.com/en/styles/colors/)
- [MATERIAL DESIGN 2](https://m2.material.io/)
- [MATERIAL DESIGN 3](https://m3.material.io/)
- [mui theme creator](https://bareynol.github.io/mui-theme-creator/)
https://m3.material.io/theme-builder#/custom
切換主題的方法   
https://stackoverflow.com/questions/62005958/vuetify-toggle-between-light-and-dark-theme-with-vuex