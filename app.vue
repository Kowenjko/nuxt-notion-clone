<script setup lang="ts">
const isDark = useDark()

const iconSelect = computed(() =>
	isDark.value ? '/logo-dark.svg' : '/logo.svg'
)
</script>

<template>
	<Head>
		<Title>Jotion</Title>
		<Meta
			name="description"
			content="The connected workspace where better, faster work happens."
		/>
		<Link rel="icon" type="image/svg+xml" :href="iconSelect" />
	</Head>
	<suspense>
		<nuxt-layout>
			<nuxt-page />
		</nuxt-layout>
	</suspense>
</template>
