<template>
	<table>
		<tr></tr>
	</table>
</template>

<script setup lang="ts">
interface IProps {
	rows?: never[]
	columns?: never[]
}
withDefaults(defineProps<IProps>(),{
  rows: ()=>[],
  columns: ()=>[],
})

</script>

<style scoped>

</style>