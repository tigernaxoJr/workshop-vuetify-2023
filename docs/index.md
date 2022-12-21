---
layout: page
---

<script setup lang="ts">
  import { ref } from 'vue'
  import Code from '../src/Code.vue'
  const test = ()=>alert('test123')
  const code = ref<string>('var a = 1')
</script>

主頁  
<Code></Code>
