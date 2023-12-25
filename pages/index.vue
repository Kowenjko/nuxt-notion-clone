<script setup lang="ts">
definePageMeta({
	layout: 'marketing',
	middleware: 'public',
})
</script>
<template>
	<div class="min-h-full flex flex-col">
		<div
			class="flex flex-col items-center justify-center md:justify-start text-center gap-y-8 flex-1 px-6 pb-10"
		>
			<MarketingHeading />
			<MarketingHeroes />
		</div>
	</div>
</template>
