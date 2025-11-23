<script setup lang="ts">
	import { ref, onMounted, onUnmounted } from 'vue'
	import ListItem from '../ListItem.vue'

	type ScrollState = {
		progress: number,
		cleanup?: () => void,
	}

	const createScrollHandler = (trigger: number) => {
		const state = ref<ScrollState>({ progress: 0 })

		const updatePosition = () => {
			const parent = document.getElementById('app')
			const section = document.getElementById('about')

			if (!parent || !section) return

			const rect = section.getBoundingClientRect()
			const viewportHeight = window.innerHeight

			const progress = (viewportHeight - rect.top) / (viewportHeight + rect.height)
			const clampedProgress = Math.max(0, Math.min(1, progress))
			state.value.progress = 1 - Math.max(0, Math.min(1, (trigger - clampedProgress) * 6))
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

	const bac = createScrollHandler(0.45);
</script>
<template>
    <section id="parcours" class="px-8 py-4 space-y-8 md:px-16 xl:w-2/3 xl:mx-auto">
        <h2 class="text-3xl font-bold sm:text-4xl lg:text-5xl" :style="{ opacity: bac.progress }">Parcours</h2>
		<div class="flex flex-col items-center">
			<div>
				<ListItem
					title="2022-2025: Bac Général"
					subtitle="Lycée La Source à Meudon"
					:fields="[
						'Spécialités: NSI, Cinéma, Maths en 1re'
					]"
					color="#F5004A"
					:focused="bac.progress > 0.95"
					:index=0
				/>
				<ListItem
					title="2025-2028: BUT MMI"
					subtitle="IUT de Vélizy"
					:fields=[]
					color="#F5009F"
					:focused="bac.progress > 0.95"
					:index=1
					/>
				<ListItem
					title="2019-2026: Batterie et Piano"
					subtitle="Conservatoire de Chaville"
					:fields="[
						'Cursus piano: 2nd cycle',
						'Cursus batterie: 1er cycle'
					]"
					color="#9300F5"
					:focused="bac.progress > 0.95"
					:index=2
					:isLast=true
				/>
			</div>
		</div>
    </section>
</template>