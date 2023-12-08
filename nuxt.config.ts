// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: true },
	typescript: { typeCheck: true },
	modules: [
		'@nuxtjs/tailwindcss',
		'shadcn-nuxt',
		'@nuxtjs/google-fonts',
		'@vueuse/nuxt',
		'@nuxt/image',
	],
	googleFonts: {
		families: {
			Inter: true,
			Poppins: true,
		},
	},
	build: {
		transpile: ['vue-clerk', '@clerk/clerk-js'],
	},
	runtimeConfig: {
		public: {
			clerkPublishableKey: process.env.CLERK_PUBLISHABLE_KEY,
		},
		clerkSecretKey: process.env.CLERK_SECRET_KEY,
	},
	shadcn: {
		prefix: '',
		componentDir: './components/ui',
	},
})
