import { defineConfig } from "vitepress"
import sidebar from "./sidebar"
export default defineConfig({
  title: 'Vuetify Workshop 2023',
  description: 'Just playing around.',
  base: '/workshop-vuetify-2023',
  appearance: 'dark',
  // cleanUrls: 'with-subfolders',
  themeConfig: {
    nav: [
      { text: 'Workshop', link: '/workshop/workshop' },
      { text: 'Todo', link: '/todo/todo' },
    ],
    sidebar
  }
})