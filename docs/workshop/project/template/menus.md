vuetify3 下使用 `layouts`、`views` 資料夾存放寫的版面、分頁。  
## VLIst
![](/vlist.png)
```vue
<template>
  <v-card class="mx-auto" width="300" >
    <v-list v-model:opened="open">
      <!-- 單純 list item -->
      <v-list-item prepend-icon="mdi-home" title="Home"></v-list-item>
      <v-list-item prepend-icon="mdi-trash" title="回收桶"></v-list-item>

      <!-- 可開合清單 -->
      <v-list-group value="Users">
        <template v-slot:activator="{ props }">
          <v-list-item v-bind="props" title="Users" ></v-list-item>
        </template>

      <!-- 巢狀可開合清單 -->
        <v-list-group value="Admin">
          <template v-slot:activator="{ props }">
            <v-list-item v-bind="props" title="Admin" ></v-list-item>
          </template>

          <template v-for="([title, icon], i) in admins">
            <v-list-item
            :key="i"
            :title="title"
            :prepend-icon="icon"
            :value="title"
            ></v-list-item>
          </template>
        </v-list-group>
      </v-list-group>
    </v-list>
  </v-card>
</template>
<script>
  export default {
    data: () => ({
      open: ['Users'],
      admins: [
        ['Management', 'mdi-account-multiple-outline'],
        ['Settings', 'mdi-cog-outline'],
      ],
      cruds: [
        ['Create', 'mdi-plus-outline'],
        ['Read', 'mdi-file-outline'],
        ['Update', 'mdi-update'],
        ['Delete', 'mdi-delete'],
      ],
    }),
  }
</script>
```
### [activator 插槽](https://vuetifyjs.com/en/api/v-list-group/#slots-activator)
activator 插槽允許你在組件中插入一個自定義元素，通常是按鈕、icon 或其他可點擊的元素，以觸發特定事件或操作(例如 VList開合、彈出 Dialog、彈出 Menu)。

## 新增 Menus
新增 `src/components/SideMenu.js`，先不需要嘗試理解這個部分，有時間再講。
```js
import { h } from "vue";
import { VList, VListGroup, VListItem } from "vuetify/components";
const props = {
  menus: { type: Array, default: [] },
  depth: { type: Number, default: 0 },
  opened: { type: Array, default: [] }
}
const render = ( props )=>{
  const { menus, depth, opened } = props
  const el = menus.map((x)=> {
    // 沒有 children 的情況
    if(!x.children?.length) return h( VListItem, x)
    // 有 children 的情況
    const y = Object.assign({}, x);
    delete y.children; // VListItem 不接受 chidlren，會報錯特別排除
    return h( VListGroup, { value: x.id }, {
      default: () => h(component, { menus: x.children, depth: depth + 1}),
      activator: (e) => h(VListItem, { ...y, ...e.props })
    })

  })
  return depth === 0 ?  h( VList, { opened }, () => el ) :  el
}
const component = { props, render }
export default component
```
在 `src\styles\settings.scss` 加入以下 css，避免 inline padding 的縮排過多
```scss
// 直接取消縮排
// .v-list-group__items .v-list-item {
//     padding-inline-start: 16px !important;
// }
// 讓縮排較溫和
.v-list-group--prepend {
    --parent-padding: calc(var(--indent-padding)) !important;
}
```
新增 `src/menus.js`
```js
// 每個物件可傳入 v-list-item 的屬性實現對 v-list-item 的控制
export default
[
    {
      id: '01',
      title: "第一層目錄A",
      prependIcon: "",
      children: [
        { id:'011', title: "Management", prependIcon: "mdi-account-multiple-outline" },
        { id:'012', title: "Settings", prependIcon: "mdi-cog-outline" },
      ],
    },
    {
      id: '02',
      title: "第一層目錄B",
      prependIcon: "",
      children: [
        {id: '021', title: "第二層目錄", prependIcon: "mdi-plus-outline" ,
          children: [
            {id: '0211', title: "第三層物件", prependIcon: "mdi-plus-outline" },
            {id: '0212', title: "第三層物件", prependIcon: "mdi-file-outline" },
            {id: '0213', title: "第三層物件", prependIcon: "mdi-update" },
            {id: '0214', title: "第三層物件", prependIcon: "mdi-delete", href: "https://google.com" },
          ]
        },
        {id: '022', title: "第二層物件", prependIcon: "mdi-file-outline" },
        {id: '023', title: "第二層物件", prependIcon: "mdi-update" },
        {id: '024', title: "第二層物件", prependIcon: "mdi-delete", href: "https://google.com" },
      ],
    },
    {id: '03', title: "第一層物件", prependIcon: "mdi-delete", href: "https://google.com" },
  ]
```
把 `SideMenu` 新增到 `layouts/MainLayout.vue`
```vue
<template>
  <v-app>
    <v-app-bar flat border>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>應用程式名稱</v-toolbar-title>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer">
      <!-- 這裡塞 Menu List、以 opened 預設打開的節點 id 清單  -->
      <SideMenu :menus="menus" :opened="opened"></SideMenu> // [!code ++]
    </v-navigation-drawer>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script setup>
import { ref } from "vue";
import SideMenu from "@/components/SideMenu";
import menus from "@/menus";
const drawer = ref(null);
const opened = ref(["01"]);
</script>
```

P.S.需要其他現成模板可以到[Wireframes](https://vuetifyjs.com/en/getting-started/wireframes/)挑選

## 選單資料
- 後端原則：後端回傳 raw data，**不要**在後端組合目錄樹。
   ::: details
   在後端用 CTE (Database) 或 程式 (AP) 組合目錄樹也沒有錯，但是需要考量：
    1. 會把計算開銷集中在單一主機。
    2. 針對特定選單的後端商業邏輯需要依照每個 APP 撰寫一次。

   情境：
    1. 需要先過濾出特定資料，且資料表在 RMDBS 以 linked list 結構設計，可以考慮資料庫組裝 menu tree，大幅減少資料傳輸量，並製作快取。
    2. 需要套用特定複雜商業邏輯才適合回傳給前端的目錄樹，適合在程式端控管。
   :::
- 前端原則：以 Data 控制元件表現，而不是將商業邏輯寫入元件！！！
  - 相較修改 ViewModel，使用程式控制資料（javascript 物件）的形狀容易許多。
  - 與特定商業邏輯耦合的元件也無法復用。
  - 如果是不會變動的固定選單資料，直接寫死為 javascript 物件即可。

### 靜態選單資料
選單載入之後不會改變：取得 menu 清單的時候直接把 menu tree 做出來就好，資料不需要響應性。 

### 動態選單資料
診別：`急診`、`門診`、`住院`，不同診別需要顯示不同的樹狀結構，診別樹狀結構定義儲存在資料庫。
Raw Data: 紀載每次病人就診診別、當次就診參數。
處理技巧：
 - 元件 UI 結構可用，不需重寫元件(否則會將業務邏輯滲入元件造成耦合)，應由資料控制元件表現。
 - 善用資料的 reactivity 簡化程式碼
 - 除了 raw data 之外可以製造狀態 (state)。
 - 概念為：`data = computed(()=>( raw data + state ))`
 - 善用 javascript object reference 減少 menu 大小  

以病歷整合查詢選單為例：
```html
<template>
  <!-- other tag -->
  <Menu :menus="menus" >
</template>
<script setup>
import Menu from '@/components/Menu.js';
// state
const opened = ref([]);
const setOpened = (id)=>{
  const isOld = opened.value.includes(id)
  opened.value.splice(0);
  if(!isOld) opened.value.push(id);
};
// big children 
const CommonChildren = computed(()=>({
  'E': {}, 
  'I': {},
  'R': {}
}));
const menus = computed(()=>{
  // 第一層目錄
  let items = [
    {
      id : '1', value : '1'
      // other properties...
    }
  ].map((x)=>{
    const isOpened = opened.value.includes(x.id)
    const onClick = () => setOpened(x.id)
    const Children = isOpened ? CommonChildren[x.type] : []
    return { ...x, onClick, Children }
  })
  // ...... return menus
});
</script>
```