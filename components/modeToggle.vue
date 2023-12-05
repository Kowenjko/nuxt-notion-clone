<script setup lang="ts">
import { Moon, Sun } from 'lucide-vue-next'

const { system, store } = useColorMode()

watch(store, () => (store.value === 'auto' ? system.value : store.value))
</script>
<template>
	<DropdownMenu>
		<DropdownMenuTrigger asChild>
			<Button variant="outline" size="icon">
				<Sun
					class="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
				/>
				<Moon
					class="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
				/>
				<span class="sr-only">Toggle theme</span>
			</Button>
		</DropdownMenuTrigger>
		<DropdownMenuContent align="end">
			<DropdownMenuItem @click="store = 'light'"> Light </DropdownMenuItem>
			<DropdownMenuItem @click="store = 'dark'"> Dark </DropdownMenuItem>
			<DropdownMenuItem @click="store = 'auto'"> System </DropdownMenuItem>
		</DropdownMenuContent>
	</DropdownMenu>
</template>

<style scoped></style>
