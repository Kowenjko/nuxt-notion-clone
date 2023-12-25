export interface DocumentI {
	$id: string
	title: string
	userId: string
	isArchived: boolean
	parentDocument: string
	content: string
	coverImage: string
	icon: string
	isPublished: boolean
}
