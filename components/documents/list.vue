<script setup lang="ts">
import type { NavItem } from '#build/components'
import type { DocumentI } from '@/interfaces/interfaces'
import { FileIcon } from 'lucide-vue-next'

interface PropsI {
	parentDocumentId?: string
	level?: number
	data?: DocumentI[]
}

const props = withDefaults(defineProps<PropsI>(), {
	level: 0,
	parentDocumentId: '',
})

const expanded = ref<Record<string, boolean>>({})
const router = useRouter()

const { getSidebar } = await useDocuments()

const onExpand = async (documentId: string) => {
	expanded.value = {
		...expanded.value,
		[documentId]: !expanded.value[documentId],
	}
}

const onRedirect = (documentId: string) => {
	router.push(`/documents/${documentId}`)
}

const documents = await getSidebar(props.parentDocumentId)
</script>
<template>
	<template v-if="!documents">
		<ItemSkeleton :level="level" />
		<template v-if="level === 0">
			<ItemSkeleton :level="level" />
			<ItemSkeleton :level="level" />
		</template>
	</template>

	<p
		:style="[{ paddingLeft: level ? `${level * 12 + 12}px` : '12px' }]"
		:class="[
			'hidden text-sm font-medium text-muted-foreground/80',
			expanded && 'last:block',
			level === 0 && 'hidden',
		]"
	>
		No pages inside
	</p>
	<div v-for="document in documents" :key="document.$id">
		<NavItem
			:id="document.$id"
			:label="document.title"
			:icon="FileIcon"
			:level="level"
			@click="onRedirect(document.$id)"
			@on-expand="onExpand"
		/>
		<DocumentsList
			v-if="expanded[document.$id]"
			:parent-document-id="document.$id"
			:level="level + 1"
		/>
	</div>
</template>

<style scoped></style>
