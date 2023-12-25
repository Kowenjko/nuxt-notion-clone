import type { DocumentI } from '@/interfaces/interfaces'
import { useDocumentsStore } from '@/stores/useDocumentsStore'

enum EnumAction {
	'create' = 'create',
	'delete' = 'delete',
	'update' = 'update',
}

export const useDocuments = async () => {
	const { getAllDocuments } = await useAppwrite()
	const { setDocuments, deleteDocument, createDocument } = useDocumentsStore()

	setDocuments((await getAllDocuments()) as any)

	const changeDocuments = async (action: EnumAction, payload: DocumentI) => {
		if (action === 'create') createDocument(payload)
		if (action === 'delete') deleteDocument(payload.$id)
		if (action === 'update') setDocuments((await getAllDocuments()) as any)
	}

	return { changeDocuments }
}
