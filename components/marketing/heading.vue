<script setup lang="ts">
import { ArrowRight } from 'lucide-vue-next'

const isLoading = ref(false)
const isAuthenticated = ref(false)
</script>
<template>
	<div class="max-w-3xl space-y-4">
		<h1 class="text-3xl sm:text-5xl md:text-6xl font-bold">
			Your Ideas, Documents, & Plans. Unified. Welcome to
			<span class="underline">Jotion</span>
		</h1>
		<h3 class="text-base sm:text-xl md:text-2xl font-medium">
			Jotion is the connected workspace where <br />
			better, faster work happens.
		</h3>

		<div v-if="!isLoading" class="w-full flex items-center justify-center">
			<Spinner size="lg" />
		</div>

		<!-- <Button v-if="isAuthenticated && !isLoading" asChild> -->
		<Button>
			<NuxtLink to="/documents" class="flex justify-center items-center">
				Enter Jotion
				<ArrowRight class="h-4 w-4 ml-2" />
			</NuxtLink>
		</Button>

		<!-- <SignInButton v-if="!isAuthenticated && !isLoading" mode="modal">
			<Button>
				Get Jotion free
				<ArrowRight class="h-4 w-4 ml-2" />
			</Button>
		</SignInButton> -->
	</div>
</template>

<style scoped></style>
