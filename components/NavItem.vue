<script setup lang="ts">
import {
	ChevronDown,
	ChevronRight,
	MoreHorizontal,
	Plus,
	Trash,
} from 'lucide-vue-next'
import { useUser } from 'vue-clerk'

interface ItemProps {
	id?: string
	documentIcon?: string
	active?: boolean
	expanded?: boolean
	isSearch?: boolean
	level?: number
	label: string
	icon: Component
}

const props = withDefaults(defineProps<ItemProps>(), {
	level: 0,
})

const emit = defineEmits<{
	onExpand: [id: string]
}>()

const { user } = useUser()
const { handleCreateDocument } = await useDocuments()

const onArchive = () => {}

const onCreate = () => {
	if (!props.id) return
	handleCreateDocument(props.id)
	if (!props.expanded) emit('onExpand', props?.id || '')
}

const handleExpand = () => emit('onExpand', props?.id || '')

const ChevronIcon = computed(() =>
	props.expanded ? ChevronDown : ChevronRight
)
</script>
<template>
	<div
		role="button"
		:class="[
			'group min-h-[27px] text-sm py-1 pr-3 w-full hover:bg-primary/5 flex items-center text-muted-foreground font-medium',
			active && 'bg-primary/5 text-primary',
		]"
		:style="[{ paddingLeft: level ? `${level * 12 + 12}px` : '12px' }]"
	>
		<div
			v-if="!!id"
			role="button"
			class="h-full rounded-sm hover:bg-neutral-300 dark:hover:bg-neutral-600 mr-1"
			@click.stop="handleExpand"
		>
			<ChevronIcon class="h-4 w-4 shrink-0 text-muted-foreground/50" />
		</div>

		<div v-if="documentIcon" class="shrink-0 mr-2 text-[18px]">
			{{ documentIcon }}
		</div>
		<component
			v-else
			:is="icon"
			class="shrink-0 h-[18px] w-[18px] mr-2 text-muted-foreground"
		/>
		<span class="truncate">{{ label }}</span>
		<kbd
			v-if="isSearch"
			class="ml-auto pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100"
		>
			<span class="text-xs">⌘</span>K
		</kbd>
		<div v-if="!!id" class="ml-auto flex items-center gap-x-2">
			<DropdownMenu>
				<DropdownMenuTrigger @click.stop="" asChild>
					<div
						role="button"
						class="opacity-0 group-hover:opacity-100 h-full ml-auto rounded-sm hover:bg-neutral-300 dark:hover:bg-neutral-600"
					>
						<MoreHorizontal class="h-4 w-4 text-muted-foreground" />
					</div>
				</DropdownMenuTrigger>
				<DropdownMenuContent class="w-60" align="start" side="right">
					<DropdownMenuItem @click="onArchive">
						<Trash class="h-4 w-4 mr-2" />
						Delete
					</DropdownMenuItem>
					<DropdownMenuSeparator />
					<div class="text-xs text-muted-foreground p-2">
						Last edited by: {{ user?.fullName }}
					</div>
				</DropdownMenuContent>
			</DropdownMenu>
			<div
				role="button"
				@click.stop="onCreate"
				class="opacity-0 group-hover:opacity-100 h-full ml-auto rounded-sm hover:bg-neutral-300 dark:hover:bg-neutral-600"
			>
				<Plus class="h-4 w-4 text-muted-foreground" />
			</div>
		</div>
	</div>
</template>

<style scoped></style>
