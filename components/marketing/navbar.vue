<script setup lang="ts">
const isLoading = ref(false)
const isAuthenticated = ref(false)
const scrolled = ref(false)
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
			class="md:ml-auto md:justify-end justify-between w-full flex items-center gap-x-2"
		>
			<Spinner v-if="isLoading" />

			<!-- <template v-if="!isAuthenticated && !isLoading">
            <SignInButton  mode="modal">
              <Button variant="ghost" size="sm">
                Log in
              </Button>
            </SignInButton>
            <SignInButton mode="modal">
              <Button size="sm">
                Get Jotion free
              </Button>
            </SignInButton>
          </template> -->

			<Button variant="ghost" size="sm"> Log in </Button>
			<Button variant="ghost" size="sm" asChild>
				<nuxt-link to="/documents">Enter Jotion</nuxt-link>
			</Button>

			<template v-if="isAuthenticated && !isLoading">
				<Button variant="ghost" size="sm" asChild>
					<nuxt-link href="/documents"> Enter Jotion </nuxt-link>
				</Button>
				<!-- <UserButton
              afterSignOutUrl="/"
            /> -->
			</template>

			<ModeToggle />
		</div>
	</div>
</template>

<style scoped></style>
