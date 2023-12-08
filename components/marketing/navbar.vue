<script setup lang="ts">
import { SignInButton, UserButton, useAuth } from 'vue-clerk'

const loading = ref(true)
const { isSignedIn, isLoaded } = useAuth()
const scrolled = useScrollTop()

watch([loading, isLoaded], () => {
	if (loading.value && isLoaded.value) loading.value = false
})

onMounted(() => (loading.value = false))
</script>
<template>
	<div
		:class="[
			'z-50 bg-background dark:bg-[#1F1F1F] fixed top-0 flex items-center w-full p-6',
			scrolled && 'border-b shadow-sm',
		]"
	>
		<MarketingLogo />
		<div
			class="md:ml-auto md:justify-end justify-between w-full flex items-center gap-x-3"
		>
			<Spinner v-if="loading" />

			<template v-if="!isSignedIn && !loading">
				<SignInButton afterSignInUrl="/marketing" mode="modal">
					<Button @click="loading = true" variant="ghost" size="sm">
						Log in
					</Button>
				</SignInButton>
				<SignInButton afterSignInUrl="/marketing" mode="modal">
					<Button size="sm"> Get Jotion free </Button>
				</SignInButton>
			</template>

			<template v-if="isSignedIn && !loading">
				<Button variant="ghost" size="sm" asChild>
					<nuxt-link href="/documents"> Enter Jotion </nuxt-link>
				</Button>
				<UserButton afterSignOutUrl="/marketing" />
			</template>

			<ModeToggle />
		</div>
	</div>
</template>

<style scoped></style>
