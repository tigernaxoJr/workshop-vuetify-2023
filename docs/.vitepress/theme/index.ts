import DefaultTheme from 'vitepress/theme'
import { useData, Theme } from 'vitepress/client'
// import 'quasar/src/css/index.sass'

export default {
  ...DefaultTheme,
  // Layout: DefaultTheme.Layout,
  // NotFound: DefaultTheme.NotFound,
  // enhanceApp: ({app})=> app.use(Quasar)
} as Theme