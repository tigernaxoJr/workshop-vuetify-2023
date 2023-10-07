import { defineConfig } from 'vitepress';
import { fileURLToPath } from 'url';

// import { tabsMarkdownPlugin } from 'vitepress-plugin-tabs'
import sidebar from './sidebar';
export default defineConfig({
  title: 'Vuetify 2023',
  description: 'Just playing around.',
  base: '',
  // appearance: 'dark',
  cleanUrls: false,
  themeConfig: {
    nav: [
      { text: '工作坊', link: '/workshop/workshop' },
      // { text: '其他', link: '/other/other' },
      // { text: 'Reference', link: '/reference/component' },
      { text: '輸入密鑰', link: '/decrypt' },
    ],
    sidebar,
  },
  head: [
    [
      'link',
      {
        href: 'https://cdn.jsdelivr.net/npm/vuetify@3.3.19/dist/vuetify.min.css',
        rel: 'stylesheet',
      },
    ],
  ],
  vite: {
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('../../src', import.meta.url)),
      },
    },
  },
});
