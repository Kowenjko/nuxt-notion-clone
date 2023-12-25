import { Client, Account, Databases } from 'appwrite'

export const appwriteSetup = () => {
	const { appwriteEndpoint, projectID, databaseID, collectionID } =
		useRuntimeConfig().public

	const client = new Client()

	client.setEndpoint(appwriteEndpoint).setProject(projectID)

	const account = new Account(client)
	const databases = new Databases(client)

	return { client, databases, databaseID, collectionID }
}
