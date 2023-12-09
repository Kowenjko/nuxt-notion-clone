<script setup lang="ts">
const { isSignedIn, loading } = useAuthClerk()

const router = useRouter()

onMounted(() => {
	if (!isSignedIn.value) return router.push('/')
})
</script>
<template>
	<div v-if="loading" class="h-screen flex items-center justify-center">
		<Spinner size="lg" />
	</div>
	<div v-if="isSignedIn" class="h-full flex dark:bg-[#1F1F1F]">
		<DocumentsNavigation />
		<main class="flex-1 h-full overflow-y-auto">
			<slot />
		</main>
	</div>
</template>

<style scoped></style>
