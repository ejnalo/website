<script setup lang="ts">
	import ArrowDown from '../icons/ArrowDown.vue';

	import { ref, onMounted, onUnmounted } from 'vue'
	import { RouterLink } from 'vue-router';

	import { goTo } from '@/scripts/utils';

	const scale = ref(1)

	const handleScroll = () => {
		const parent = document.getElementById('app')
		if (!parent) return

		const scrollTop = parent.scrollTop
		const scrollHeight = parent.scrollHeight - parent.clientHeight

		const ratio = scrollTop / scrollHeight
		scale.value = Math.max(0, 1 - (ratio / 1))
	}

	onMounted(() => {
		var parent = document.getElementById('app')
		parent?.addEventListener('scroll', handleScroll)
	})

	onUnmounted(() => {
		const parent = document.getElementById('app')
		parent?.removeEventListener('scroll', handleScroll)
	})

	const scrollTo = (id: string) => {
		const elem = document.getElementById(id)
		elem?.scrollIntoView({ behavior: 'smooth' })
	}
</script>
<template>
	<header ref="headerRef" class="sticky top-0 flex justify-center items-center h-screen z-10 transition-transform ease-out origin-top" :style="{ transform: `scale(${scale})` }">
		<div class="text-center p-8 space-y-8 sm:p-16">
			<div>
				<h1 class="text-6xl font-bold">Loan</h1>
				<h2 class="text-white/50 text-xl font-medium">Portfolio d'un photographe</h2>
				<ul class="flex justify-center gap-8">
					<li class="inline-block h-full py-3"><RouterLink to="/projects" class="block font-medium underline underline-offset-3 decoration-2 decoration-transparent w-full h-full duration-150 hover:decoration-white/50">Projets</RouterLink></li>
					<li class="inline-block h-full py-3"><RouterLink to="/portfolio" class="block font-medium underline underline-offset-3 decoration-2 decoration-transparent w-full h-full duration-150 hover:decoration-white/50">Portfolio</RouterLink></li>
					<li class="inline-block h-full py-3"><a v-on:click="goTo('#footer', true)" class="cursor-pointer block font-medium underline underline-offset-3 decoration-2 decoration-transparent w-full h-full duration-150 hover:decoration-white/50">Contact</a></li>
				</ul>
			</div>
			<button class="group cursor-pointer block bg-white/5 border-3 border-white/15 rounded-full mx-auto p-4 duration-500 animate-bounce hover:scale-90" v-on:click="scrollTo('content')">
				<ArrowDown class="w-4 h-4 stroke-white/75 stroke-3 duration-500 group-hover:scale-115" />
			</button>
		</div>
	</header>
</template>