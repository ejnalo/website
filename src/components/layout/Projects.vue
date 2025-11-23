<script setup lang="ts">
	import Project from '../Project.vue';

	import { ref, onMounted, onUnmounted } from 'vue'

	import { goTo } from '@/scripts/utils';

	type ScrollState = {
		progress: number,
		cleanup?: () => void,
	}

	const createScrollHandler = (trigger: number) => {
		const state = ref<ScrollState>({ progress: 0 })

		const updatePosition = () => {
			const parent = document.getElementById('projects')

			if (!parent) return

			const rect = parent.getBoundingClientRect()
			const viewportHeight = window.innerHeight

			const progress = (viewportHeight - rect.top) / (viewportHeight + rect.height)
			const clampedProgress = Math.max(0, progress)
			state.value.progress = Math.max(0, (trigger + clampedProgress) * 6)
		}

		onMounted(() => {
			const parent = document.getElementById('app')

			if (parent) {
				updatePosition()

				parent.addEventListener('scroll', updatePosition)
				state.value.cleanup = () => parent.removeEventListener('scroll', updatePosition)
			}
		})

		onUnmounted(() => {
			state.value.cleanup?.()
		})

		return state
	}

	const scroll = createScrollHandler(0.3);
</script>
<template>
    <section id="projects" class="px-8 py-4 space-y-8 sm:px-16 sm:space-y-12 xl:w-2/3 xl:mx-auto">
        <h2 class="text-3xl font-bold sm:text-4xl lg:text-5xl" :style="{ opacity: scroll.progress - 2 }">Projets</h2>
        <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
			<Project
				title="Nation"
				description="Démocratie 100% française sur Discord"
				link="https://github.com/1nserv"
				image="https://nationserver.pages.dev/banner.png"
				:focused="false"
			/>
			<Project
				title="MMI.codes"
				description="Portail pour les étudiants MMI de Vélizy"
				link="https://github.com/MMI-CODES"
				image="/banner_mmi.png"
				:focused="false"
			/>
			<Project
				title="ArrowBit"
				description="Interpréteur de langage en ligne de commande"
				link="https://github.com/arrowbitlang"
				image="/banner_bow.png"
				:focused="false"
			/>
        </div>
		<button class="cursor-pointer bg-white text-black font-medium rounded-full px-6 py-3 duration-300 ease-in-out hover:scale-102" v-on:click="goTo('/projects', true)">Voir tous les projets</button>
    </section>
</template>