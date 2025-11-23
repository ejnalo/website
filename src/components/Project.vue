<script setup lang="ts">
	import { ref, computed } from 'vue'

	const props = defineProps<{
		title: string
		description: string
		link: string
		image: string
		focused: boolean
	}>()

	const isHovered = ref(false)

	const boxStyle = computed(() => ({
		transition: 'all 0.5s ease'
	}))
</script>
<template>
	<a
		:href="link"
		class="cursor-pointer block bg-white/5 text-sm text-left font-medium rounded-3xl duration-500 hover:scale-101"
		@mouseover="isHovered = true"
		@mouseleave="isHovered = false"
		:style="boxStyle"
	>
		<img :src="image" class="rounded-t-3xl w-full h-auto"/>
		<div class="p-6 pt-4">
			<h3 class="text-xl font-bold">{{ title }}</h3>
			<p class="text-white/25">{{ description }}</p>
		</div>
	</a>
</template>