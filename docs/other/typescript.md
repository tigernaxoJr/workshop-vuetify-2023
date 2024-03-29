---
outline: [2,3]
---
# Vue3 x Typescript
## TypeScript

TypeScript 是一種由 Microsoft 開發的開源程式語言，它是 JavaScript 的超集（包含了 JavaScript 所有功能），增加了靜態類型檢查和其他 OOP 的特性。使用 TypeScript 的開發人員可以在開發階段發現許多型別錯誤，提高程式碼的正確性，而不影響使用者的程式碼。

<!-- dependency UML -->

### Pros and Cons of TypeScript

#### 優點

- **減少潛在執行時錯誤**：Typescript 的靜態類型檢查，在開發階段發現許多型別錯誤，提高程式碼的正確性，減少潛在執行時錯誤。
- **程式碼可維護性**： 強制類型規範使程式碼變得更易於維護。開發人員更容易理解變數和函數的用途，利於團隊合作、代碼重構。
- **利於專案合作**：同上，TypeScript 能更好地管理專案的複雜性(尤其是大型前端專案)，提高代碼的可維護性，並且有利於團隊合作。
- **框架和工具支援**：主流的前端框架和工具等都對 TypeScript 提供了良好的支援，工具如 tsc（編譯器）、tslint、TypeScript 語言服務可幫助開發者進行代碼檢查、代碼轉換、代碼壓縮等。
- **更好的開發體驗/生產力**：程式碼提示和自動補全： TypeScript 類型系統可以幫助 IDE (例如 VS Code)提供更精確的代碼提示和自動補全功能，提高開發效率。
- **支援最新 ECMAScript 規範**： TypeScript 支援 ECMAScript 的最新規範，可以在 TypeScript 中使用最新的 JavaScript 語法，而不必等待所有瀏覽器都完全支援。

#### 缺點

- 學習成本： 對於那些不熟悉 TypeScript 的開發人員來說，學習 TypeScript 可能需要一些時間。習慣了動態類型語言的開發者可能需要時間來適應 TypeScript 的靜態類型特性，以及學習如何定義類型和使用 TypeScript 相關工具。

- 專案初始化成本： 對於已有的 JavaScript 專案，導入 TypeScript 可能需要一些初始成本。這包括設置 TypeScript 編譯器、處理可能的類型錯誤，以及將現有的 JavaScript 代碼轉換成 TypeScript。

- 增加程式碼量： 在 TypeScript 中，需要為變數、函數、類等明確地定義類型，這可能會增加程式碼的量。有時候可能會感覺繁瑣，特別是對於一些簡單的代碼而言。

- 兼容性問題： 對於某些庫或第三方插件，可能並未提供 TypeScript 的定義文件，這可能導致一些兼容性問題。雖然可以使用類型定義檔來解決這個問題，但有時可能需要進行手動定義或自行處理。

- 專案團隊經驗： 如果公司只會使用舊技術的老職員，專案團隊可能對 TypeScript 不太熟悉，這可能導致在團隊內部引入 TypeScript 時遇到一些挑戰。需要提供適當的培訓和支援，以幫助團隊成員學習和採用 TypeScript。

- 低門檻專案： 在一些小型、簡單的專案中，引入 TypeScript 可能會顯得有點過度，因為這些專案可能並不需要 TypeScript 提供的複雜功能。

## 型別操作 

### 選擇性屬性 (Optional Properties)
```ts
interface Car {
  brand: string;
  model: string;
  year?: number; // 選擇性屬性
}

const myCar: Car = {
  brand: "Toyota",
  model: "Camry"
};
```
### 唯獨屬性（Read-only Properties）
```ts
interface Point {
  readonly x: number;
  readonly y: number;
}

const p: Point = { x: 5, y: 10 };
// p.x = 20;  // 無法修改 x 的值，會引發編譯錯誤
```
### 任意屬性（Index Signatures）
```ts
interface UserInfo {
  id: number;
  name: string;
  // 任意屬性，屬性名稱是字串，值的型別是任意的
  [key: string]: any;
}

const user: UserInfo = {
  id: 1,
  name: 'Alice',
  email: 'alice@example.com', // 可以添加其他屬性，不會引發編譯錯誤
};
```
### 聯合型別 (Union Types)
```ts
type ID = number | string;

function printID(id: ID) {
  console.log(id);
}

printID(123);     // 輸出: 123
printID("abc");   // 輸出: abc
```
### 交集型別 (Intersection Types)
要能夠同時符合兩種型別
```ts
type Employee = {
  id: number;
  name: string;
};

type Department = {
  departmentId: number;
  departmentName: string;
};

type EmployeeWithDepartment = Employee & Department;
```
### 型別斷言 (Type Assertion)
```ts
let value: any = "hello";
let length: number = (value as string).length;
```
### 函數型別 (Function Types)
```ts
type MathOperation = (x: number, y: number) => number;

const add: MathOperation = (x, y) => x + y;
```
### Pick<Type, Keys>
```ts
interface Todo {
  title: string;
  description: string;
  completed: boolean;
}
 
type TodoPreview = Pick<Todo, "title" | "completed">;
 
const todo: TodoPreview = {
  title: "Clean room",
  completed: false,
};
```
### Omit<Type, Keys>
```ts
type Person = {
  name: string;
  age: number;
  email: string;
};

type PersonWithoutEmail = Omit<Person, "email">;
```
### Indexed Access Types
```ts
type Person = { age: number; name: string; alive: boolean };
type Age = Person["age"];
// type Age = number
```
### InstanceType\<Type>

### Keyof 
```ts
type Person = {
  name: string;
  age: number;
  email: string;
};

type PersonKeys = keyof Person; // "name" | "age" | "email"
```
## 介面(interface)
介面(interface)提供的型別檢查行為基本和型別(type)相同，也可以 union、intersection，官網建議優先使用 Interface，但沒有解釋原因。
```ts
interface Person {
  name: string;
  age: number;
}

let person: Person = {
  name: "John",
  age: 30
};

console.log(person.name); // 輸出: John
```

### 合併介面（Declaration Merging）
介面可以定義多次，會自動合併。
```ts
interface Person {
  name: string;
}

interface Person {
  age: number;
}

const person: Person = {
  name: 'Alice',
  age: 30,
};
```
### 介面繼承（Interface Inheritance）
type 不能用 extends，但 interface 可以。 
interface 繼承 的對象可以是 type
```ts
interface Person {
  name: string;
  age: number;
}

interface Employee {
  employeeId: string;
  department: string;
}

interface EmployeeInfo extends Person, Employee {
  position: string;
}

const employeeInfo: EmployeeInfo = {
  name: 'Alice',
  age: 30,
  employeeId: 'E12345',
  department: 'IT',
  position: 'Software Engineer',
};
```
## 其他
### 剩餘參數 (Rest Parameters)
```ts
function sum(...numbers: number[]): number {
  return numbers.reduce((total, num) => total + num, 0);
}

console.log(sum(1, 2, 3)); // 輸出: 6
```
### Typeof 
範例：型別守衛 (Type Guards)，使用 typeof、instanceof 等來檢查變數的型別：
```ts
function printValue(value: string | number) {
  if (typeof value === "string") {
    console.log(value.toUpperCase());
  } else if (typeof value === "number") {
    console.log(value.toFixed(2));
  }
}
```
### any（任意型別）  
標記為 any 的變數可以保存任何型別的值，並跳過型別檢查，但同時失去型別安全性。濫用 any 會導致在編譯期無法正常捕獲錯誤。
使用時機：
 - JS 專案轉換為 TS 時，可使用 any 型別作為過渡。
 - 使用未知型別的第三方套件或資料時，忽略型別檢查。
### unknow（未知型別）
未知型別。TS 在標記為 unknow 的變數使用之前對其進行型別檢查。是所有類型的父類型。
使用時機：
 - 不確定一個變數的型別時，未來使用者(程式碼使用者)可能同時處理可能具有多種型別的值

### void
代表 **沒有** 回傳值  
使用時機：明確表示函式沒有回傳值(或回傳 `undefined`)
### never（?）  
程式永遠不會實際`執值`的變數可以標記為 never。是所有類型的子類型。
和 void 不同，never 有實際的值只是程式不執值。
使用時機：
 - 會永遠拋出錯誤的函式的回傳值。
 - 標記程式永遠不會實際`執值`的變數。

### object literal
類似 c# 中一次性使用的匿名型別
```ts
let obj: { property: string; } = { property: "foo" };
```
### [Conditional Types](https://www.typescriptlang.org/docs/handbook/2/conditional-types.html)

## 使用時機
| 種類      | 時機                                                                  |
| --------- | --------------------------------------------------------------------- |
| type      | 原始型別、列舉(Enum)、元組(Tuple)、複合型別、不希望再被擴充的靜態型別 |
| interface | 優先使用、希望之後擴充                                                |

## Vue3 開發環境

- CLI：專案建立選項 `Use Typescript` 選擇 **Yes**
- VSCode：[安裝擴充套件](vscode:extension/Vue.vscode-typescript-vue-plugin)
- 程式碼：在 `<script setup>` 加上 lang="ts"
  ```vue
  <script setup lang="ts"></script>
  ```


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

## Type/Interface

ypeScript 中的 type 和 interface 是用來定義自定義型別的兩種主要方式。它們在定義型別的方法和使用時機上有一些異同。讓我們逐一介紹、比較並討論使用時機：

介紹 type：

type 是一種 TypeScript 的型別聲明方式，可以用來創建自定義型別。
可以使用 type 關鍵字定義基本型別、聯合型別、交叉型別、函數型別等。
type 也支援泛型。
type 可以使用類型操作符，例如 Pick、Omit、Partial 等。
介紹 interface：

interface 是用來定義 TypeScript 的型別的另一種方式，同樣用於創建自定義型別。
主要用於定義物件型別，用於描述物件的結構和形狀。
interface 支援繼承，可以擴展其他 interface 或 class。
比較異同：

適用範圍： type 不僅可以用於定義物件型別，還可以用於定義其他型別，例如基本型別、聯合型別等。而 interface 主要用於定義物件型別，用於描述物件的結構和形狀。

擴展性： interface 支援擴展，可以繼承其他 interface 或 class，而 type 不支援擴展。

類型命名： type 可以使用任意的名稱來定義型別，而 interface 只能使用標識符來命名。

泛型支援： type 支援泛型，可以使用泛型來創建更靈活的型別定義，而 interface 也支援泛型，但在某些情況下可能不如 type 靈活。

使用時機：

選擇使用 type 還是 interface 取決於你的需求和情況：

使用 type：當你需要定義一個複雜的型別，或需要使用交叉型別、聯合型別、類型操作符等功能時，可以使用 type。
使用 interface：當你主要需要定義物件型別，並且需要擴展其他 interface 或 class 時，可以使用 interface。
通常來說，在物件型別的定義上，interface 是首選，因為它提供了更多物件型別相關的特性。而在其他型別的定義上，例如基本型別、聯合型別、交叉型別等，或需要使用較複雜的型別操作時，type 可能更適合。然而，這並不是絕對的規則，根據實際情況選擇最適合的型別聲明方式是最重要的。

### Type

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

### Intrface

介面在 TypeScript 中用於定義一個具有特定屬性和方法的結構。它只是一個用於描述物件的型別。

```ts
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
    console.log('Woof!');
  }
}

const dog1 = new Dog('Buddy', 5);
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
- [Typescript Tutorial](https://www.typescripttutorial.net/)
- [TypeScript-Utility Types](https://www.typescriptlang.org/docs/handbook/utility-types.html)
- [稀土掘金-一文看懂any，never，void和unknown的区别](https://juejin.cn/post/7151926103324983304)