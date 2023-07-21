# TypeScript
dependency UML
## Why TS
pros cons

## TS十分鐘
### 開發環境
- CLI：專案建立選項 `Use Typescript` 選擇 **Yes**
- VSCode：[安裝擴充套件](vscode:extension/Vue.vscode-typescript-vue-plugin)
- 程式碼：在 `<script setup>` 加上 lang="ts"
	```vue
	<script setup lang="ts">
	</script>
	```
### 特性
#### type/interface  
繼承
extend
&
#### function defination
#### casting  
- as
- <>
#### never/any/unknow  
any：可以是任意型別(已建議棄用)
never：開發週期不會需要知道型別
unknow：未知型別
- as unknow as somtype


## Props 
目的：告訴 IDE( VSCode )，SFC 有哪些 props。
```ts
// 為 props 宣告 props 介面/型別  
// 注意如果要 export 必須接在 import 下面。
export interface Props {
  msg: string        // msg 為父元件必要提供的 props
  labels?: string[]  // labels 為非必要提供的 props
}

// 使用 defineProps 定義 Props
// 定義 props 後 template 內可直接使用 foo、bar
// setup 程式要使用 props ，必須先將 props 宣告給變數
const props = withDefaults(defineProps<Props>(), {
  msg: 'hello',
  labels: () => ['one', 'two']
})

// setup 程式內可透過 props 使用 msg
window.console.log(props.msg)
```

## Event

```ts
// 不採用 TS 的作法
const emit = defineEmits(['change', 'delete'])

// 採用 TS 的作法，type declaration
export interface IEmit {
  (e: 'change', id: number): void
  (e: 'update', value: string): void
}
const emit = defineEmits<IEmit>()
```
## Provide/Inject

上游元件
```vue
<script lang="ts">
import { InjectionKey, provide, Ref, reactive } from 'vue';
// State
export interface IState {
  drawer: boolean;
}
export const stateKey: InjectionKey<Ref<IState>> = Symbol();
const state = reactive<IState>({
  drawer: false,
});
provide<IState>(stateKey, computed(()=>state));
</script>
```

下游元件
```vue
<script setup lang="ts">
import { inject, ref } from 'vue';
import { stateKey } from './Parent.vue';

const state = inject(stateKey, ref({ drawer: false }));
// 此時使用 state 就會有 IDE 提示
</script>
```

## Vue3 Bug
根據[官方說明](https://vuejs.org/api/sfc-script-setup.html#typescript-only-features)，目前無法直接透過 import 讓 SFC 外部 interfece/type。  
影響：無法把 Props、Emits... 等等定義在 SFC 外部、繼承其他元件的時候無法拉型別進來獲得 IDE 支援。
> Currently complex types and type imports from other files are not supported. It is possible to support type imports in the future.   

Workaround: 在本地擋案 extends 原本的 interface，多加一個無用的屬性，重新命名
```ts
import { InterfaceA } from 'some-package';
interface IProps extends QBtnProps {
  mock?: undefined;
}
```
## Example
```vue
<template>
  <q-btn v-bind="$attrs">
    <template
      v-for="(_, slot) in ($slots as Readonly<QBtnSlots>)"
      v-slot:[slot]="scope"
    >
      <slot :name="slot" v-bind="scope"></slot>
    </template>
    <slot></slot>
  </q-btn>
</template>

<script setup lang="ts">
import type { QBtnSlots, QBtnProps } from 'quasar';
import { QBtn } from 'quasar';
// 這樣 Wrapper SFC 才會獲得 IDE 支援 
interface IProps extends QBtnProps {
  mock?: undefined;
}
defineProps<IProps>();
</script>

<style scoped></style>
```

## Summary
- props 分為必要/非必要。
- props 可給定預設值。
- template 內：直接使用 `foo`、`bar` **不需**透過變數 `props.`  
- setup 內：**需**透過變數 `props` 使用 `foo`、`bar`


