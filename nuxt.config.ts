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
		'@pinia/nuxt',
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
	pinia: {
		storesDirs: ['./stores/**', './custom-folder/stores/**'],
	},
	runtimeConfig: {
		public: {
			clerkPublishableKey: process.env.CLERK_PUBLISHABLE_KEY || '',
			appwriteEndpoint: process.env.APPWRITE_ENDPOINT || '',
			projectID: process.env.APPWRITE_PROJECT_ID || '',
			databaseID: process.env.APPWRITE_DATABASE_ID || '',
			collectionID: process.env.APPWRITE_COLLECTION_ID || '',
		},
		clerkSecretKey: process.env.CLERK_SECRET_KEY || '',
	},
	shadcn: {
		prefix: '',
		componentDir: './components/ui',
	},
})
