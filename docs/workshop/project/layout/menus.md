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
新增 `src/components/SideMenu.js`，先不需要嘗試理解這個部分。
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