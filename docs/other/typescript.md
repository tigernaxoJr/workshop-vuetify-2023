# TypeScript

TypeScript 是一種由 Microsoft 開發的開源程式語言，它是 JavaScript 的超集，也就是說 TypeScript 包含了 JavaScript 的所有功能，並且擴展了類型系統。

<!-- dependency UML -->

## Why TS

### 優點

- **減少潛在執行時錯誤**：Typescript 的靜態類型檢查，在開發階段發現許多型別錯誤，提高程式碼的正確性，減少潛在執行時錯誤。
- **程式碼可維護性**： 強制類型規範使程式碼變得更易於維護。開發人員更容易理解變數和函數的用途，利於團隊合作、代碼重構。
- **利於專案合作**：同上，TypeScript 能更好地管理專案的複雜性(尤其是大型前端專案)，提高代碼的可維護性，並且有利於團隊合作。
- **框架和工具支援**：主流的前端框架和工具等都對 TypeScript 提供了良好的支援，工具如 tsc（編譯器）、tslint、TypeScript 語言服務可幫助開發者進行代碼檢查、代碼轉換、代碼壓縮等。
- **更好的開發體驗/生產力**：程式碼提示和自動補全： TypeScript 類型系統可以幫助 IDE (例如 VS Code)提供更精確的代碼提示和自動補全功能，提高開發效率。
- **支援最新 ECMAScript 規範**： TypeScript 支援 ECMAScript 的最新規範，可以在 TypeScript 中使用最新的 JavaScript 語法，而不必等待所有瀏覽器都完全支援。

### 缺點

- 學習成本： 對於那些不熟悉 TypeScript 的開發人員來說，學習 TypeScript 可能需要一些時間。習慣了動態類型語言的開發者可能需要時間來適應 TypeScript 的靜態類型特性，以及學習如何定義類型和使用 TypeScript 相關工具。

- 專案初始化成本： 對於已有的 JavaScript 專案，導入 TypeScript 可能需要一些初始成本。這包括設置 TypeScript 編譯器、處理可能的類型錯誤，以及將現有的 JavaScript 代碼轉換成 TypeScript。

- 增加程式碼量： 在 TypeScript 中，需要為變數、函數、類等明確地定義類型，這可能會增加程式碼的量。有時候可能會感覺繁瑣，特別是對於一些簡單的代碼而言。

- 兼容性問題： 對於某些庫或第三方插件，可能並未提供 TypeScript 的定義文件，這可能導致一些兼容性問題。雖然可以使用類型定義檔來解決這個問題，但有時可能需要進行手動定義或自行處理。

- 專案團隊經驗： 如果公司只會使用舊技術的老職員，專案團隊可能對 TypeScript 不太熟悉，這可能導致在團隊內部引入 TypeScript 時遇到一些挑戰。需要提供適當的培訓和支援，以幫助團隊成員學習和採用 TypeScript。

- 低門檻專案： 在一些小型、簡單的專案中，引入 TypeScript 可能會顯得有點過度，因為這些專案可能並不需要 TypeScript 提供的複雜功能。

## TS 十分鐘

### 開發環境

- CLI：專案建立選項 `Use Typescript` 選擇 **Yes**
- VSCode：[安裝擴充套件](vscode:extension/Vue.vscode-typescript-vue-plugin)
- 程式碼：在 `<script setup>` 加上 lang="ts"
  ```vue
  <script setup lang="ts"></script>
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
  msg: string; // msg 為父元件必要提供的 props
  labels?: string[]; // labels 為非必要提供的 props
}

// 使用 defineProps 定義 Props
// 定義 props 後 template 內可直接使用 foo、bar
// setup 程式要使用 props ，必須先將 props 宣告給變數
const props = withDefaults(defineProps<Props>(), {
  msg: 'hello',
  labels: () => ['one', 'two'],
});

// setup 程式內可透過 props 使用 msg
window.console.log(props.msg);
```

## Event

```ts
// 不採用 TS 的作法
const emit = defineEmits(['change', 'delete']);

// 採用 TS 的作法，type declaration
export interface IEmit {
  (e: 'change', id: number): void;
  (e: 'update', value: string): void;
}
const emit = defineEmits<IEmit>();
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
provide<IState>(
  stateKey,
  computed(() => state)
);
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

## class

可以使用 class 來定義類別，並且可以在類別中定義屬性和方法。

```ts
class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  sayHello() {
    console.log(
      `Hello, my name is ${this.name}, and I am ${this.age} years old.`
    );
  }
}

const person1 = new Person('John', 30);
person1.sayHello(); // 輸出：Hello, my name is John, and I am 30 years old.
```

## interface

介面在 TypeScript 中用於定義一個具有特定屬性和方法的結構。它只是一個用於描述物件的型別。

```
interface Animal {
  name: string;
  age: number;
  speak: () => void;
}

class Dog implements Animal {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  speak() {
    console.log("Woof!");
  }
}

const dog1 = new Dog("Buddy", 5);
dog1.speak(); // 輸出：Woof!

```

## 型別操作

### omit

omit 可以用來從一個型別中刪除指定的屬性，返回新的型別。

```ts
type OriginalType = {
  name: string;
  age: number;
  gender: string;
};

type ModifiedType = Omit<OriginalType, 'gender'>;

const person: ModifiedType = {
  name: 'Alice',
  age: 25,
};

console.log(person); // 輸出：{ name: 'Alice', age: 25 }
```

### Partial

Partial 可以將一個型別中的所有屬性設置為可選的，返回新的型別。

```ts
type Book = {
  title: string;
  author: string;
  year: number;
};

type PartialBook = Partial<Book>;

const partialBook: PartialBook = {
  title: 'TypeScript 101',
};

console.log(partialBook); // 輸出：{ title: 'TypeScript 101' }
```

### Pick

Pick 可以從一個型別中選取指定的屬性，返回新的型別。

```ts
type Product = {
  name: string;
  price: number;
  category: string;
};

type ProductNameAndPrice = Pick<Product, 'name' | 'price'>;

const product: ProductNameAndPrice = {
  name: 'Laptop',
  price: 999,
};

console.log(product); // 輸出：{ name: 'Laptop', price: 999 }
```

### Readonly

Readonly 可以將一個型別中的所有屬性設置為只讀，返回新的型別。

```ts
type Todo = {
  title: string;
  completed: boolean;
};

type ReadonlyTodo = Readonly<Todo>;

const todo: ReadonlyTodo = {
  title: 'Buy groceries',
  completed: false,
};

// 下面的語句將會引發編譯錯誤
// todo.title = "Go to the gym";
// todo.completed = true;
```

## Summary

- props 分為必要/非必要。
- props 可給定預設值。
- template 內：直接使用 `foo`、`bar` **不需**透過變數 `props.`
- setup 內：**需**透過變數 `props` 使用 `foo`、`bar`

## Reference

- [Typescript](https://www.typescriptlang.org/)
