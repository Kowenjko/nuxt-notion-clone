<script setup lang="ts">
import { PlusCircle } from 'lucide-vue-next'
import { useUser } from 'vue-clerk'

const isDark = useDark()
const { user } = useUser()

const { subscribeDocument } = await useAppwrite()
const { changeDocuments, handleCreateDocument } = await useDocuments()

const unsubscribe = subscribeDocument(changeDocuments)

const iconEmpty = computed(() =>
	isDark.value ? '/empty-dark.png' : '/empty.png'
)

definePageMeta({
	layout: 'documents',
	middleware: 'auth',
})
</script>
<template>
	<div class="h-screen flex flex-col items-center justify-center space-y-4">
		<NuxtImg :src="iconEmpty" height="300" width="300" alt="empty" />
		<h2 class="text-lg font-medium">
			Welcome to {{ user?.firstName }}&apos;s Jotion
		</h2>
		<Button @click="handleCreateDocument('')">
			<PlusCircle class="h-4 w-4 mr-2" />
			Create a note
		</Button>
	</div>
</template>
