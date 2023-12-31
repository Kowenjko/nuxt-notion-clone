import { useClerk } from 'vue-clerk'

export default defineNuxtRouteMiddleware(async () => {
	const nuxtApp = useNuxtApp()
	const clerk = useClerk()

	// On server, check if the user isn't authenticated
	// and redirect to /.
	if (process.server && !nuxtApp.ssrContext?.event.context.auth)
		return navigateTo('/')

	// On client, check if clerk is loaded and if user isn't authenticated
	// and redirect to /.
	if (process.client && clerk.loaded && !clerk.user?.id) return navigateTo('/')
})
