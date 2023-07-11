import { defineConfig } from "vitepress"
import sidebar from "./sidebar"
export default defineConfig({
  title: 'Vuetify Workshop 2023',
  description: 'Just playing around.',
  base: '/workshop-vuetify-2023',
  appearance: 'dark',
  cleanUrls: false,
  themeConfig: {
    nav: [
      { text: 'Vue3', link: '/vue3/vue3' },
      { text: 'Workshop', link: '/workshop/workshop' },
      { text: 'Reference', link: '/reference/component' },
    ],
    sidebar
  }
})
