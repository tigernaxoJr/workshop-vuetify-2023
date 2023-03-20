vuetify3 下使用 `layouts`、`views` 資料夾存放寫的版面、分頁。  
## 新增 Menus
新增 `src/components/SideMenu.js`，先不需要嘗試理解這個部分。
```js
import { h } from "vue";
import { VList, VListGroup, VListItem } from "vuetify/components/VList";
const component = {
  props:{
    menus: Object,
    depth: { type: Number, default: 0 },
  },
  setup( props ) {
    const { menus, depth, opened } = props
    const { id, label: title, icon: prependIcon, children, to, href } = menus;
    const el = !!children?.length
    ? h( VListGroup, {value: id},
      {
        default: () => children.map( x => h( component, { menus: x, depth: depth + 1})),
        activator: (e) => h(VListItem, { title, ...e.props })
      })
    : h( VListItem, { title, prependIcon, to, href, target: "_blank" });
    return depth === 0 ? () => h( VList, { opened }, () => el ) : () => el
  }
}
export default component
```
在 `src\styles\settings.scss` 加入以下 css，避免 inline padding 的縮排過多
```scss
.v-list-group__items .v-list-item {
    padding-inline-start: 16px !important;
}
```
新增 `src/menus.js`
```js
export default {
  id: '0',
  label: "Users",
  icon: "",
  children: [
    {
      id: '01',
      label: "Admins",
      icon: "",
      children: [
        { id:'011', label: "Management", icon: "mdi-account-multiple-outline" },
        { id:'012', label: "Settings", icon: "mdi-cog-outline" },
      ],
    },
    {
      id: '02',
      label: "CRUDS",
      icon: "",
      children: [
        {id: '021', label: "Create", icon: "mdi-plus-outline" },
        {id: '022', label: "Read", icon: "mdi-file-outline" },
        {id: '023', label: "Update", icon: "mdi-update" },
        {id: '024', label: "Delete", icon: "mdi-delete", href: "https://google.com" },
      ],
    },
  ],
}

```
新增 `layouts/MainLayout.vue`
```vue
<template>
  <v-app>
    <v-app-bar flat border>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>應用程式名稱</v-toolbar-title>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer">
      <!-- 這裡塞 Menu List、預設打開的節點  -->
      <SideMenu :menus="menus" :opened="['0', '01', '02']"></SideMenu>
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
</script>
```

P.S.需要其他現成模板可以到[Wireframes](https://vuetifyjs.com/en/getting-started/wireframes/)挑選