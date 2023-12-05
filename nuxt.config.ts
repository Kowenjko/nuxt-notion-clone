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
	shadcn: {
		prefix: '',
		componentDir: './components/ui',
	},
})
