<script setup lang="ts">
import { Loader } from 'lucide-vue-next'

interface Props {
	size?: 'default' | 'sm' | 'lg' | 'icon'
}

withDefaults(defineProps<Props>(), {
	size: 'default',
})
</script>
<template>
	<Loader :class="['animate-spin', size]" />
</template>

<style scoped>
.default {
	@apply h-4 w-4;
}
.sm {
	@apply h-2 w-2;
}
.lg {
	@apply h-6 w-6;
}
.icon {
	@apply h-10 w-10;
}
</style>
