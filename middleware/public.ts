import { useClerk } from 'vue-clerk'

export default defineNuxtRouteMiddleware(() => {
	const nuxtApp = useNuxtApp()
	const clerk = useClerk()
	console.log('Middleware===>')

	// On server, check if the user is authenticated
	// and redirect to /documents.
	if (process.server && nuxtApp.ssrContext?.event.context.auth?.userId) {
		return navigateTo('/documents')
	}

	// On client, check if clerk is loaded and if user is authenticated
	// and redirect to /documents.
	if (process.client && clerk.loaded && clerk.user?.id) {
		return navigateTo('/documents')
	}
})
