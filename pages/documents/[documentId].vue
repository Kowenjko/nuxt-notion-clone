<script setup lang="ts">
const route = useRoute()
</script>
<template>
	<div>{{ route.params?.documentId }}</div>
</template>

<style scoped></style>
