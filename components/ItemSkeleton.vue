<script setup lang="ts">
interface PropsI {
	level?: number
}
defineProps<PropsI>()
</script>
<template>
	<div
		class="flex gap-x-2 py-[3px]"
		:style="{ paddingLeft: level ? `${level * 12 + 25}px` : '12px' }"
	>
		<Skeleton class="h-4 w-4" />
		<Skeleton class="h-4 w-[30%]" />
	</div>
</template>
