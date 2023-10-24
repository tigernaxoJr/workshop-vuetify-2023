# 元件製作
元件盡量不要混入商業邏輯，除非商業邏輯穩定度夠高、可以做為底層邏輯重複使用。

## 練習
- todo: 使用 `progress-linear` 、 `card`、`Dialog`製作 loading component
- todo: 了解 `v-bind="$attrs"` 的意義，如何製造 wrapper component。
::: details 先練習再看答案
<template>
  <v-dialog v-model="dialog">
    <v-card class="mx-auto" color="primary" variant="elevated" width="300" height="70">
      <v-card-item class="text-center"> {{ text }} </v-card-item>
      <v-card-item>
        <v-progress-linear indeterminate color="white"></v-progress-linear>
      </v-card-item>
    </v-card>
  </v-dialog>
</template>

<script setup lang="ts">
import { computed } from "vue";
const props = defineProps({
  modelValue: {
    type: Boolean,
    default: true,
  },
  text: {
    type: String,
    default: "請稍候",
  },
});
const emits = defineEmits(["update:modelValue"]);

const dialog = computed({
  get: () => props.modelValue,
  set: (e) => emits("update:modelValue", e),
});
</script>
```
:::

## 元件註冊
[vuejs-registration](https://vuejs.org/guide/components/registration.html)

## 型別定義
todo: 有空再講。參考 SideMenu.d.ts、components.d.ts

遲早要懂的 Typescript