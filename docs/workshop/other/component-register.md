# 全局註冊元件
main.js
```js
import SideMenu from '@/components/SideMenu'
//...
const app = createApp(App)
// 加這一行
app.component('SideMenu', SideMenu)
```

## 型別注釋
為了讓IDE能夠提供 JS 元件的型別提示，需要手動定義元件型別，作法繁瑣。建議考慮直接使用 TS(TypeScript)，TS 提供型別支持，節省開發人員生命。

1. 妥善描述元件型別
```ts
// SideMenu.d.ts
import { VListItem } from "vuetify/components";
import { DefineComponent } from "vue";

//#region Menus
// Menus 把所有屬性都丟給 VListItem，因此可透過 Menus 控制 VListItem
// 因此 Menus 拿 VListItem 的 $props 作為屬性，並額外加入屬性 id, children
type MenusBase = Pick<
  VListItem['$props'],
  Exclude<keyof VListItem['$props'], `v-${string}` | `$${string}`>
>
type MenusExtra = { id: any }
export type Menu = MenusBase & MenusExtra & { children?: Menus } & { parent: any }
export type Menus = Array<Menu & any>;
//#endregion

//#region IProps
export type Props = {
  menus: Menus,
  opened?: string[]
}
//#endregion

const SideMenu :DefineComponent<Props>
export default SideMenu
```

2. 把元件型別註冊到 GlobalComponents
```ts
// src/components/components.d.ts
import SideMenu from './SideMenu'

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    SideMenu: typeof SideMenu,
  }
}
```