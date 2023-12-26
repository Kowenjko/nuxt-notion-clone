import type { DocumentI } from '@/interfaces/interfaces'
import { useDocumentsStore } from '@/stores/useDocumentsStore'

enum EnumAction {
	'create' = 'create',
	'delete' = 'delete',
	'update' = 'update',
}

export const useDocuments = async () => {
	const router = useRouter()
	const { $toast } = useNuxtApp()
	const { getAllDocuments, createDocument, getDocumentsAllParentDocument } =
		await useAppwrite()

	const { setDocumentsStore, deleteDocumentStore, createDocumentStore } =
		useDocumentsStore()

	setDocumentsStore((await getAllDocuments()) as any)

	const changeDocuments = async (action: EnumAction, payload: DocumentI) => {
		if (action === 'create') createDocumentStore(payload)
		if (action === 'delete') deleteDocumentStore(payload.$id)
		if (action === 'update') setDocumentsStore((await getAllDocuments()) as any)
	}

	const getSidebar = async (id: string) => {
		const documents = await getDocumentsAllParentDocument(id)
		console.log(documents)
		return documents
	}

	const handleCreateDocument = (id: string) => {
		const promise = createDocument('Untitled', id).then(
			(document) => console.log(document)
			// router.push(`/documents/${document?.$id}`)
		)
		$toast.promise(promise, {
			loading: 'Creating a new note...',
			success: () => 'New note created!',
			error: () => 'Failed to create a new note.',
		})
	}

	return { changeDocuments, handleCreateDocument, getSidebar }
}
