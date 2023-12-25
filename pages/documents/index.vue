<script setup lang="ts">
import { PlusCircle } from 'lucide-vue-next'
import { useUser } from 'vue-clerk'
import { storeToRefs } from 'pinia'

const isDark = useDark()
const router = useRouter()
const { user } = useUser()
const { $toast } = useNuxtApp()

const { createDocument, subscribeDocument } = await useAppwrite()
const { changeDocuments } = await useDocuments()
const documentStore = useDocumentsStore()
const { documents } = storeToRefs(documentStore)

const unsubscribe = subscribeDocument(changeDocuments)

const iconEmpty = computed(() =>
	isDark.value ? '/empty-dark.png' : '/empty.png'
)

const onCreate = async () => {
	const promise = createDocument('Create new Document').then((document) =>
		router.push(`/documents/${document?.$id}`)
	)
	$toast.promise(promise, {
		loading: 'Creating a new note...',
		success: () => 'New note created!',
		error: () => 'Failed to create a new note.',
	})
}

definePageMeta({
	layout: 'documents',
	middleware: 'auth',
})

console.log(documents.value)

// watch(documents, unsubscribe)
// onUnmounted(unsubscribe)
</script>
<template>
	<div class="h-screen flex flex-col items-center justify-center space-y-4">
		<NuxtImg :src="iconEmpty" height="300" width="300" alt="empty" />
		<h2 class="text-lg font-medium">
			Welcome to {{ user?.firstName }}&apos;s Jotion
		</h2>
		<Button @click="onCreate">
			<PlusCircle class="h-4 w-4 mr-2" />
			Create a note
		</Button>
	</div>
</template>
