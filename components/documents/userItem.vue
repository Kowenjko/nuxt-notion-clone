<script setup lang="ts">
import { ChevronsLeftRight } from 'lucide-vue-next'
import { useUser, SignOutButton } from 'vue-clerk'
const { user } = useUser()
</script>
<template>
	<DropdownMenu>
		<DropdownMenuTrigger>
			<div
				class="flex items-center text-sm p-3 w-full hover:bg-primary/5"
				role="button"
			>
				<div class="gap-x-2 flex items-center max-w-[150px]">
					<Avatar v-if="user?.imageUrl" class="h-5 w-5">
						<AvatarImage :src="user?.imageUrl" />
					</Avatar>
					<span class="text-start font-medium line-clamp-1">
						{{ user?.fullName }}&apos;s Jotion
					</span>
				</div>
				<ChevronsLeftRight
					class="rotate-90 ml-2 text-muted-foreground h-4 w-4"
				/>
			</div>
		</DropdownMenuTrigger>
		<DropdownMenuContent class="w-80" align="start" :alignOffset="11">
			<div class="flex flex-col space-y-4 p-2">
				<p class="text-xs font-medium leading-none text-muted-foreground">
					{{ user?.emailAddresses[0].emailAddress }}
				</p>
				<div class="flex items-center gap-x-2">
					<div v-if="user?.imageUrl" class="rounded-md bg-secondary p-1">
						<Avatar class="h-8 w-8">
							<AvatarImage :src="user.imageUrl" />
						</Avatar>
					</div>
					<div class="space-y-1">
						<p class="text-sm line-clamp-1">
							{{ user?.fullName }}&apos;s Jotion
						</p>
					</div>
				</div>
			</div>
			<DropdownMenuSeparator />
			<DropdownMenuItem
				asChild
				class="w-full cursor-pointer text-muted-foreground"
			>
				<SignOutButton> Log out </SignOutButton>
			</DropdownMenuItem>
		</DropdownMenuContent>
	</DropdownMenu>
</template>

<style scoped></style>
