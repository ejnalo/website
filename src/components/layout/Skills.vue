<script setup lang="ts">
	import Skill from '../Skill.vue';

	import { ref, onMounted, onUnmounted } from 'vue'

	type ScrollState = {
		progress: number,
		cleanup?: () => void,
	}

	const createScrollHandler = (trigger: number) => {
		const state = ref<ScrollState>({ progress: 0 })

		const updatePosition = () => {
			const parent = document.getElementById('talents')

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

	const tech = createScrollHandler(.3);
</script>
<template>
    <section id="talents" class="px-8 py-4 space-y-8 sm:px-16 sm:space-y-12 xl:w-2/3 xl:mx-auto">
        <h2 class="text-3xl font-bold sm:text-4xl lg:text-5xl" :style="{ opacity: tech.progress - 2 }">Compétences</h2>
		<div class="relative grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
			<Skill
				field="Tech stack"
				:keys="[
					'html',
					'css',
					'ts',
					'python',
					'vue',
					'tailwind',
					'node',
					'express',
				]"
			/>
			<Skill
				field="Multimédia"
				:keys="[
					'canva',
					'figma',
					'photoshop',
					'illustrator',
					'lightroom',
					'resolve'
				]"
			/>
			<Skill
				field="Outils & Librairies"
				:keys="[
					'git',
					'vscode',
					'psql',
					'pycord',
					'turbowarp'
				]"
				:learning="[
					'docker'
				]"
			/>
		</div>
    </section>
</template>