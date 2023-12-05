<script setup lang="ts">
const isDark = useDark()

const iconSelect = computed(() =>
	isDark.value ? '/logo-dark.svg' : '/logo.svg'
)
</script>
<template>
	<div class="hidden md:flex items-center gap-x-2 font-poppins">
		<NuxtImg :src="iconSelect" height="40" width="40" alt="Logo" />
		<p class="font-semibold !font-poppins">Jotion</p>
	</div>
</template>

<style scoped></style>
