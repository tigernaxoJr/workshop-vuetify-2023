import { defineConfig } from 'vitepress';
import { fileURLToPath } from 'url';

// import { tabsMarkdownPlugin } from 'vitepress-plugin-tabs'
import sidebar from './sidebar';
export default defineConfig({
  title: 'Vuetify 2023',
  description: 'Just playing around.',
  base: '/workshop-vuetify-2023',
  // appearance: 'dark',
  cleanUrls: false,
  themeConfig: {
    nav: [
      { text: 'Vue3', link: '/vue3/vue3' },
      { text: '工作坊', link: '/workshop/workshop' },
      // { text: '其他', link: '/other/other' },
      // { text: 'Reference', link: '/reference/component' },
      { text: '輸入密鑰', link: '/decrypt' },
    ],
    sidebar,
  },
  vite: {
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('../../src', import.meta.url)),
      },
    },
  },
});
