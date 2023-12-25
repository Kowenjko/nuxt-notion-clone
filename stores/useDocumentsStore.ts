import { defineStore } from 'pinia'
import type { DocumentI } from '@/interfaces/interfaces'

export const useDocumentsStore = defineStore('documents', () => {
	const documents = ref<DocumentI[]>([])

	const setDocuments = (newDocuments: DocumentI[]) =>
		(documents.value = newDocuments)

	const deleteDocument = (id: string) =>
		documents.value.filter((document: any) => document.$id !== id)

	const createDocument = (document: DocumentI) =>
		(documents.value = [document, ...documents.value])

	return { documents, setDocuments, deleteDocument, createDocument }
})
