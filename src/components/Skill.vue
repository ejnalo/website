<script setup lang="ts">
	const props = defineProps<{
		field: string
		keys: string[]
		learning?: string[]
	}>()

	const skill_list: Record<string, {
		icon: string
		label: string
		mastery: number
	}> = {
		html: { icon: 'html.svg', label: 'HTML', mastery: 100 },
		css: { icon: 'css.svg', label: 'CSS', mastery: 85 },
		ts: { icon: 'ts.svg', label: 'JS/Typescript', mastery: 60 },
		python: { icon: 'py.svg', label: 'Python', mastery: 80 },
		vue: { icon: 'vue.svg', label: 'Vue', mastery: 50 },
		tailwind: { icon: 'tw.svg', label: 'Tailwind', mastery: 95 },
		express: { icon: 'express.svg', label: 'Express', mastery: 80 },
		psql: { icon: 'psql.svg', label: 'PostgreSQL', mastery: 50 },
		node: { icon: 'node.svg', label: 'NodeJS', mastery: 60 },
		canva: { icon: 'canva.svg', label: 'Canva', mastery: 90 },
		photoshop: { icon: 'Ps.svg', label: 'Photoshop', mastery: 20 },
		lightroom: { icon: 'Lr.svg', label: 'Lightroom', mastery: 60 },
		illustrator: { icon: 'Ai.svg', label: 'Illustrator', mastery: 5 },
		figma: { icon: 'figma.svg', label: 'Figma', mastery: 75 },
		resolve: { icon: 'resolve.png', label: 'DaVinci Resolve', mastery: 50 },
		docker: { icon: 'docker.svg', label: 'Docker', mastery: 30 },
		git: { icon: 'git.svg', label: 'Git & GitHub', mastery: 60 },
		vscode: { icon: 'vscode.svg', label: 'VSCode', mastery: 75 },
		turbowarp: { icon: 'turbowarp.png', label: 'Turbowarp', mastery: 100 },
		pycord: { icon: 'pycord.png', label: 'Pycord', mastery: 60 }
	}

	let skills = props.keys.map(key => skill_list[key]!).sort((a, b) => b.mastery - a.mastery)
	let skills_learning = (props.learning?.map(key => skill_list[key]!) || []).sort((a, b) => b.mastery - a.mastery)
</script>
<template>
	<div class="select-none space-y-8">
		<h3 class="text-2xl font-semibold sm:text-3xl max-lg:text-left">{{ field }}</h3>
		<ul class="text-left space-y-4">
			<li v-for="skill in skills" class="flex items-center gap-2">
				<img :src="'/skills/' + skill.icon" class="inline-block w-10 h-10" />
				<div class="flex-col items-center -translate-y-1">
					<span class="block text-lg font-medium">{{ skill.label }}</span>
					<div class="bg-white/15 rounded-full w-20 h-1">
						<div
							class="rounded-full h-1"
							:class="skill.mastery >= 60 ? 'bg-emerald-400/50' : 'bg-white/50'"
							:style="{ width: skill.mastery + '%' }"
						>
						</div>
					</div>
				</div>
			</li>
		</ul>
		<h4 v-if="learning" class="text-xl font-semibold sm:text-2xl">En apprentissage</h4>
		<ul v-if="learning" class="text-left space-y-4">
			<li v-for="skill in skills_learning" class="flex items-center gap-2">
				<img :src="'/skills/' + skill.icon" class="inline-block w-10 h-10" />
				<div class="flex-col items-center -translate-y-1">
					<span class="block text-lg font-medium">{{ skill.label }}</span>
					<div class="bg-white/15 rounded-full w-20 h-1">
						<div
							class="rounded-full h-1"
							:class="skill.mastery >= 60 ? 'bg-emerald-400/50' : 'bg-white/50'"
							:style="{ width: skill.mastery + '%' }"
						>
						</div>
					</div>
				</div>
			</li>
		</ul>
	</div>
</template>