import { defineStore } from 'pinia'
import type { DocumentI } from '@/interfaces/interfaces'

export const useDocumentsStore = defineStore('documents', () => {
	const documents = ref<DocumentI[]>([])

	const setDocumentsStore = (newDocuments: DocumentI[]) =>
		(documents.value = newDocuments)

	const deleteDocumentStore = (id: string) =>
		(documents.value = documents.value.filter(
			(document: any) => document.$id !== id
		))

	const createDocumentStore = (document: DocumentI) => {
		if (documents.value.some((el: DocumentI) => el.$id === document.$id)) return
		documents.value = [document, ...documents.value]
	}

	return {
		documents,
		setDocumentsStore,
		deleteDocumentStore,
		createDocumentStore,
	}
})
