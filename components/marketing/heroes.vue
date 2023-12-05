<script setup lang="ts">
const isDark = useDark()

const iconDocumentSelect = computed(() =>
	isDark.value ? '/documents-dark.png' : '/documents.png'
)
const iconReadingSelect = computed(() =>
	isDark.value ? '/reading-dark.png' : '/reading.png'
)
</script>

<template>
	<div class="flex flex-col items-center justify-center max-w-5xl">
		<div class="flex items-center">
			<div
				class="relative w-[300px] h-[300px] sm:w-[350px] sm:h-[350px] md:h-[400px] md:w-[400px]"
			>
				<NuxtImg
					:src="iconDocumentSelect"
					class="object-contain"
					alt="Documents"
				/>
			</div>
			<div class="relative h-[400px] w-[400px] hidden md:block">
				<NuxtImg
					:src="iconReadingSelect"
					class="object-contain"
					alt="Reading"
				/>
			</div>
		</div>
	</div>
</template>
