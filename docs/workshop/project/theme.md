# 主題設置
## 自訂主題

### 主題挑色
  - [調色盤](https://vuetifyjs.com/en/styles/colors/)
  - [Material Theme Builder](https://m3.material.io/theme-builder#/dynamic)
### Configuration
```js
// myCustomLightTheme.js
// 自訂的主題以內建的 light theme 參數為例
export default {
  dark: false,
  colors: {
    background: '#FFFFFF',
    surface: '#FFFFFF',
    'surface-variant': '#424242',
    'on-surface-variant': '#EEEEEE',
    primary: '#6200EE',
    'primary-darken-1': '#3700B3',
    secondary: '#03DAC6',
    'secondary-darken-1': '#018786',
    error: '#B00020',
    info: '#2196F3',
    success: '#4CAF50',
    warning: '#FB8C00',
  },
  variables: {
    'border-color': '#000000',
    'border-opacity': 0.12,
    'high-emphasis-opacity': 0.87,
    'medium-emphasis-opacity': 0.60,
    'disabled-opacity': 0.38,
    'idle-opacity': 0.04,
    'hover-opacity': 0.04,
    'focus-opacity': 0.12,
    'selected-opacity': 0.08,
    'activated-opacity': 0.12,
    'pressed-opacity': 0.12,
    'dragged-opacity': 0.08,
    'theme-kbd': '#212529',
    'theme-on-kbd': '#FFFFFF',
    'theme-code': '#F5F5F5',
    'theme-on-code': '#000000',
  },
}
```

```js
// src/plugins/vuetify.js
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Composables
import { createVuetify } from 'vuetify'
import myCustomLightTheme from 'myCustomLightTheme.js'

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  theme: {
    // 設置app預設主題，除了可用的主題選項還有 vuetify 內建的 light/dark
    defaultTheme: 'myCustomLightTheme',
    // 可用的主題選項
    themes: {
      myCustomLightTheme,
    }
  }
})
```
## 動態切換主題
```html
<template>
  <v-app>
    <v-btn @click="toggleTheme">主題切換</v-btn>
  </v-app>
</template>

<script setup>
import { useTheme } from 'vuetify'
// 用 useTheme 取得 theme 實體(A.K.A. 一個 javascript 物件)。
const theme = useTheme();
// 透過改變 theme.global.name 的值切換主題。
const toggleTheme = () => theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark'
// 可能有人不習慣官方的寫法，以下用等價的程式解釋程式
// P.S. 所謂等價程式，是指不考慮兩種寫法當中的 hoisting/TDZ(提升/暫時性死區)、this binding(this 指涉) 等等細節差異。
/* 
function toggleTheme(){
  const isDark = theme.global.current.value.dark;
  const theme = isDark ? 'light' : 'dark';
  theme.global.name.value = theme;
}
*/
</script>
```
## 使用不同主題
### 使用 `theme="dark"`
### 使用 `<v-theme-provider>`

## vuetify3/vuetify2 (較重要)差異： 
  - 雙主題(light/dark)改為多主題(Multiple themes)：捨棄元件的 light/dark props，改用類似 `theme="dark"` 的方式指定元件主題，一旦元件透過 `theme="dark"` 指定主題，下游元件會自動獲得該主題。
  - variant class 和 theme 結合：`class="primary darken-1"` 改為 `class="primary-darken-1"`
## Todo
顏色的意義
## Reference
- [Vuetify-Features-Theme configuration](https://next.vuetifyjs.com/en/features/theme/)
- [Vuetify-Style and animations-Material color palette](https://next.vuetifyjs.com/en/styles/colors/)
- [MATERIAL DESIGN 2](https://m2.material.io/)
- [MATERIAL DESIGN 3](https://m3.material.io/)
- [mui theme creator](https://bareynol.github.io/mui-theme-creator/)
- [[GitHub]vuetifyjs/vuetify-theme.ts](https://github.com/vuetifyjs/vuetify/blob/master/packages/vuetify/src/composables/theme.ts)

https://m3.material.io/theme-builder#/custom
切換主題的方法   
https://stackoverflow.com/questions/62005958/vuetify-toggle-between-light-and-dark-theme-with-vuex