import { useAuth } from 'vue-clerk'

export const useAuthClerk = () => {
	const loading = ref(true)
	const { isSignedIn, isLoaded } = useAuth()

	watch([loading, isLoaded], () => {
		if (loading.value && isLoaded.value) loading.value = false
	})

	onMounted(() => (loading.value = false))

	return { isSignedIn, loading }
}
