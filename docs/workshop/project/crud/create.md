## 新增查詢頁面
1. 新增檔案 `src\views\Front\IndexPage.vue`   
2. 使用 `vbase` 快捷鍵新增頁面模板 
  ![](/vbase.png)

`PracticeLayout`
`src\router\index.js`
## 路由設置
設置前台路由
```js
const routes = [
  //...
  {
    path: '/Practice',
    component: () => import('@/layouts/PracticeLayout.vue'), 
    children: [
      {
        path: '',
        name: 'PracticeCRUD',
        component: () => import('@/views/PracticeCRUD/IndexPage.vue'),
      },
    ],
  },
  //...
]
```
## Layout 元件
參考`FrontLayout`製作。

## 頁面元件
1. 撰寫 pseudocode：
  我習慣將頁面拆分成不同部分：
   - IndexPage：負責排版、事件處理和維護頁面狀態。
   - SearchSection：管理搜尋條件，傳遞搜尋事件。
   - TableSection：接收並渲染結果清單、傳遞使用者操作事件。
   - FormSection：填寫資料區塊，通常被包在 Dialog 裡面，可用於新增、修改單筆資料。
  ```vue
<template>
  <v-container fluid class="fill-height align-start flex-column"> 
    <!-- 搜尋區 -->
    <SectionSearch v-model="query" @query="onQuery" />
    <!-- 搜尋結果區 -->
    <SectionTable :items="items" />
    <!-- Dialog -->
    <v-dialog v-model="dialog" persistent width="1024">
      <SectionForm @submit="onSubmit" />
    </v-dialog>
  </v-container>
</template>

<script setup>
import { reactive } from 'vue'
import SectionSearch from './SectionSearch.vue'
import SectionTable from './SectionTable.vue'
import SectionForm from './SectionForm.vue'

//#region 處理搜尋區的狀態、事件調度
const query = reactive({})
const onQuery = () => {
  // do ajax
}
//#endregion

//#region 處理搜尋結果區的狀態
const items = reactive({})
//#endregion

//#region 處理表單區塊的事件
const onSubmit = () => {
  // todo: ajax 新增一筆資料
  // todo: 
  //   - option1: 將資料更新到 items
  //   - option2: 依照設定好的條件重新查詢
}
//#endregion
</script>

<style lang="scss" scoped></style>
  ```
2. 依樣畫葫蘆新增 `SearchSection`、`TableSection`、`FormSection`。