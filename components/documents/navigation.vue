<script setup lang="ts">
import { ChevronsLeft, MenuIcon } from 'lucide-vue-next'

const { width } = useWindowSize()
const route = useRoute()

const isMobile = computed<boolean>(() => width.value < 768)

const isResizingRef = ref<boolean>(false)
const isResetting = ref<boolean>(false)
const isCollapsed = ref<boolean>(isMobile.value)

const styleSidebar = reactive({ width: '240px' })
const styleNavbar = reactive({ width: 'calc(100%-240px)', left: '240px' })

const handleMouseDown = (event: MouseEvent) => {
	isResizingRef.value = true
	document.addEventListener('mousemove', handleMouseMove)
	document.addEventListener('mouseup', handleMouseUp)
}

const resetWidth = () => {
	isCollapsed.value = false
	isResetting.value = true

	styleSidebar.width = isMobile.value ? '100%' : '240px'
	styleNavbar.width = isMobile.value ? '0' : 'calc(100% - 240px)'
	styleNavbar.left = isMobile.value ? '100%' : '240px'

	setTimeout(() => (isResetting.value = false), 300)
}

const handleMouseMove = (event: MouseEvent) => {
	if (!isResizingRef.value) return

	let newWidth = event.clientX

	if (newWidth < 240) newWidth = 240
	if (newWidth > 480) newWidth = 480

	styleSidebar.width = `${newWidth}px`
	styleNavbar.width = `calc(100% - ${newWidth}px)`
	styleNavbar.left = `${newWidth}px`
}

const handleMouseUp = () => {
	isResizingRef.value = false
	document.removeEventListener('mousemove', handleMouseMove)
	document.removeEventListener('mouseup', handleMouseUp)
}

const collapse = () => {
	isCollapsed.value = true
	isResetting.value = true

	styleSidebar.width = '0'
	styleNavbar.width = '100%'
	styleNavbar.left = '0'

	setTimeout(() => (isResetting.value = false), 300)
}

watch([isMobile, route], (value) => (value ? collapse() : resetWidth()))
</script>
<template>
	<aside
		:class="[
			'group/sidebar h-screen bg-secondary overflow-y-auto relative flex  flex-col z-40',
			isResetting && 'transition-all ease-in-out duration-300',
			isMobile && 'w-0',
		]"
		:style="styleSidebar"
	>
		<button
			@click="collapse"
			:class="[
				'h-6 w-6 text-muted-foreground rounded-sm hover:bg-neutral-300 dark:hover:bg-neutral-600 absolute top-3 right-2 opacity-0 group-hover/sidebar:opacity-100 transition',
				isMobile && 'opacity-100',
			]"
		>
			<ChevronsLeft class="h-6 w-6" />
		</button>
		<div>
			<DocumentsUserItem />
		</div>

		<div class="mt-4">DocumentList</div>
		<div
			class="opacity-0 group-hover/sidebar:opacity-100 transition cursor-ew-resize absolute h-full w-1 bg-primary/10 right-0 top-0"
			@click="resetWidth"
			@mousedown.prevent.stop="handleMouseDown"
		/>
	</aside>

	<div
		:class="[
			'absolute top-0 z-40 ',
			isResetting && 'transition-all ease-in-out duration-300',
			isMobile && 'left-0 w-full',
		]"
		:style="styleNavbar"
	>
		<nav class="bg-transparent px-3 py-2 w-full">
			<button v-if="isCollapsed" @click="resetWidth">
				<MenuIcon class="h-6 w-6 text-muted-foreground" />
			</button>
		</nav>
	</div>
</template>

<style scoped></style>
