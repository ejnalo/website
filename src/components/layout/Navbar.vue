<script setup lang="ts">
	import { RouterLink } from 'vue-router';

	import { goTo } from '@/scripts/utils';

	const props = defineProps<{
		links?: object,
		hide_home?: boolean
	}>();
</script>
<template>
	<nav class="sticky top-0 block bg-white/5 backdrop-blur-2xl border-b-2 border-white/15 h-16 z-100 px-8 box-content sm:h-20 sm:px-10">
		<ul class="flex justify-center gap-8">
			<li class="inline-block h-full py-5 sm:py-7" v-if="!hide_home"><RouterLink to="/" class="block font-medium underline underline-offset-3 decoration-2 decoration-transparent w-full h-full duration-150 hover:decoration-white/50">Accueil</RouterLink></li>
			<li v-if="links" v-for="link in Object.entries(links)" class="cursor-pointer inline-block h-full py-5 sm:py-7"><a v-on:click="goTo(link[0], true)" class="block font-medium underline underline-offset-3 decoration-2 decoration-transparent w-full h-full duration-150 hover:decoration-white/50">{{ link[1] }}</a></li>
			<li class="grow inline-block h-full py-5 sm:py-7"></li>
			<li class="inline-block h-full py-5 sm:py-7"><RouterLink to="/projects" class="block font-medium underline underline-offset-3 decoration-2 decoration-transparent w-full h-full duration-150 hover:decoration-white/50">Projets</RouterLink></li>
			<li class="inline-block h-full py-5 sm:py-7"><RouterLink to="/portfolio" class="block font-medium underline underline-offset-3 decoration-2 decoration-transparent w-full h-full duration-150 hover:decoration-white/50">Portfolio</RouterLink></li>
			<li class="inline-block h-full py-5 max-sm:hidden sm:py-7"><a v-on:click="goTo('#footer', true)" class="cursor-pointer block font-medium underline underline-offset-3 decoration-2 decoration-transparent w-full h-full duration-150 hover:decoration-white/50">Contact</a></li>
		</ul>
	</nav>
</template>