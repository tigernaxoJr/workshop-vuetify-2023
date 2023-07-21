import DefaultTheme from 'vitepress/theme'
import { useData, Theme } from 'vitepress/client'
// import { enhanceAppWithTabs } from 'vitepress-plugin-tabs/client'
// import 'quasar/src/css/index.sass'

export default {
  ...DefaultTheme,
  // enhanceApp({app}) {
  //   enhanceAppWithTabs(app)
  // },
  // Layout: DefaultTheme.Layout,
  // NotFound: DefaultTheme.NotFound,
  // enhanceApp: ({app})=> app.use(Quasar)
} as Theme