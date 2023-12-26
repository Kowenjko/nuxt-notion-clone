import type { DocumentI } from '@/interfaces/interfaces'
import { v4 as uuidv4 } from 'uuid'
import { useUser } from 'vue-clerk'

import { Query } from 'appwrite'
import { appwriteSetup } from '@/utils/appwrite'

export const useAppwrite = async () => {
	const { user } = useUser()
	const { databases, client, databaseID, collectionID } = appwriteSetup()

	const getAllDocuments = async () => {
		try {
			const { documents } = await databases.listDocuments(
				databaseID,
				collectionID
			)
			return documents
		} catch (error) {
			console.log(error)
		}
	}

	const getLastDocumentId = async () => {
		try {
			const { documents } = await databases.listDocuments(
				databaseID,
				collectionID,
				[Query.orderDesc('$createdAt')]
			)
			return documents[0]?.$id || ''
		} catch (error) {
			console.log(error)
		}
	}

	const getDocumentsAllParentDocument = async (id: string) => {
		try {
			const { documents } = await databases.listDocuments(
				databaseID,
				collectionID,
				[Query.equal('parentDocument', [id]), Query.orderDesc('$createdAt')]
			)
			return documents
		} catch (error) {
			console.log(error)
		}
	}

	const createDocument = async (title: string, id: string) => {
		const parentDocument = id || ''
		const userId = user.value?.id! || ''

		const newDocument: Partial<DocumentI> = {
			title,
			parentDocument,
			userId,
			isArchived: false,
			isPublished: false,
		}

		try {
			return await databases.createDocument(
				databaseID,
				collectionID,
				uuidv4(),
				newDocument
			)
		} catch (error) {
			console.log(error)
		}
	}

	const subscribeDocument = (callback: Function) => {
		const unsubscribe = client.subscribe(
			`databases.${databaseID}.collections.${collectionID}.documents`,
			(response) => {
				if (
					response.events.includes(
						'databases.*.collections.*.documents.*.create'
					)
				) {
					console.log('A MESSAGE WAS CREATED')
					callback('create', response.payload)
				}
				if (
					response.events.includes(
						'databases.*.collections.*.documents.*.delete'
					)
				) {
					console.log('A MESSAGE WAS DELETED!!!')
					callback('delete', response.payload)
				}
				if (
					response.events.includes(
						'databases.*.collections.*.documents.*.update'
					)
				) {
					console.log('A MESSAGE WAS UPDATE!!!')
					callback('update', response.payload)
				}
			}
		)

		return unsubscribe
	}

	return {
		getAllDocuments,
		getLastDocumentId,
		createDocument,
		subscribeDocument,
		getDocumentsAllParentDocument,
	}
}
