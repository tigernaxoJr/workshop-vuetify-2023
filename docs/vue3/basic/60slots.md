<!-- ---
layout: page
--- -->

# 插槽(Slot)

![](https://vuejs.org/assets/slots.dbdaf1e8.png)

```vue
<!-- parent component -->
<template>
  <FancyButton>
    <!-- 把文字作為 slot content 插入 FancyButton -->
    點我!
  </FancyButton>
</template>
```

```vue
<!-- child component -->
<template>
  <button>
    <!-- 沒有指定名稱就是 default slot -->
    <slot>
      <!-- 如果父元件沒有指定 slot 的內容，會顯示預設值 -->
      預設值
    </slot>
  </button>
</template>
```

## 存取範圍

Expressions 存取範圍：

- 寫在 parent template 裡面的 expression 只可存取 parent scope
- 寫在 child template 裡面的 expression 只可存取 child scope
- 寫在 parent template 裡面待插入 slot 的語法只可存取 parent scope

## 具名插槽

![](https://vuejs.org/assets/named-slots.ebb7b207.png)

```html
<div class="container">
  <header>
    <slot name="header"></slot>
  </header>
  <main>
    <slot></slot>
  </main>
  <footer>
    <slot name="footer"></slot>
  </footer>
</div>
```

```html
<BaseLayout>
  <!-- v-slot:header 把內容綁定到名稱為 header 的 slot -->
  <template v-slot:header>
    <h1>Here might be a page title</h1>
  </template>

  <!-- 沒有包裹的內容預設會顯示在 default slot 裡面 -->
  <p>A paragraph for the main content.</p>
  <p>And another one.</p>

  <!-- #footer 把內容綁定到名稱為 footer 的 slot -->
  <template #footer>
    <p>Here's some contact info</p>
  </template>
</BaseLayout>
```

## 動態插槽名稱

可以用程式動態指定內容要插在哪個 slot：

```html
<base-layout>
  <template v-slot:[dynamicSlotName]> ... </template>

  <!-- with shorthand -->
  <template #[dynamicSlotName]> ... </template>
</base-layout>
```

## 作用域插槽(scoped slot)

簡單說：為了讓 slot content 拿到 child 的內容，會讓 child 綁定屬性再做使用，有點像反向注入，在 UI Framework 的元件內大量被使用，必須了解這個才能讀 quasar、vuetify 等等框架的文件。
![](https://vuejs.org/assets/scoped-slots.1c6d5876.svg)

```html
<!-- child -->
<div>
  <slot :text="greetingMessage" :count="1"></slot>
</div>
```

```html
<!-- parent -->
<!-- child 綁定的所有屬性會變成一個物件，這裡把它命名 slotProps -->
<MyComponent v-slot="slotProps">
  <!-- 這時候可以透過 slotProps 拿到子元件綁定的屬性 -->
  {{ slotProps.text }} {{ slotProps.count }}
</MyComponent>
```

通常搭配解構賦值使用。

```html
<!-- child -->
<!-- 父元件只需要少數特定的屬性時，可透過解構賦值直接拿到特定屬性 -->
<MyComponent v-slot="{ text, count }">
  <!-- 使用時不需每次都透過最上層 slotProps -->
  {{ text }} {{ count }}
</MyComponent>
```

## Reference

- [Vue.js-Slots](https://vuejs.org/guide/components/slots.html)
