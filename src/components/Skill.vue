<script setup lang="ts">
	defineProps<{
		field: string
		keys: string[]
		learning?: string[]
	}>()

	const skill_list: Record<string, Record<string, string>> = {
		html: { icon: 'html.svg', label: 'HTML' },
		css: { icon: 'css.svg', label: 'CSS' },
		ts: { icon: 'ts.svg', label: 'JS/Typescript' },
		python: { icon: 'py.svg', label: 'Python' },
		vue: { icon: 'vue.svg', label: 'Vue' },
		tailwind: { icon: 'tw.svg', label: 'Tailwind' },
		express: { icon: 'express.svg', label: 'Express' },
		psql: { icon: 'psql.svg', label: 'PostgreSQL' },
		node: { icon: 'node.svg', label: 'NodeJS' },
		canva: { icon: 'canva.svg', label: 'Canva' },
		photoshop: { icon: 'Ps.svg', label: 'Photoshop' },
		lightroom: { icon: 'Lr.svg', label: 'Lightroom' },
		illustrator: { icon: 'Ai.svg', label: 'Illustrator' },
		figma: { icon: 'figma.svg', label: 'Figma' },
		resolve: { icon: 'resolve.png', label: 'DaVinci Resolve' },
		docker: { icon: 'docker.svg', label: 'Docker' },
		git: { icon: 'git.svg', label: 'Git & GitHub' },
		vscode: { icon: 'vscode.svg', label: 'VSCode' },
		turbowarp: { icon: 'turbowarp.png', label: 'Turbowarp' },
		pycord: { icon: 'pycord.png', label: 'Pycord' }
	}
</script>
<template>
	<div>
		<h3 class="text-2xl font-semibold mb-4 sm:text-3xl max-lg:text-left">{{ field }}</h3>
		<ul class="text-left space-y-4">
			<li v-for="key in keys" class="flex items-center gap-2"><img :src="'/skills/' + skill_list[key].icon" class="inline-block w-10 h-10" /> <span class="block text-lg font-medium">{{ skill_list[key].label }}</span></li>
		</ul>
		<h4 v-if="learning" class="text-xl font-semibold mt-6 mb-4 sm:text-2xl">En apprentissage</h4>
		<ul v-if="learning" class="text-left">
			<li v-for="key in learning" class="flex items-center gap-2"><img :src="'/skills/' + skill_list[key].icon" class="inline-block w-10 h-10" /> <span class="block text-lg font-medium">{{ skill_list[key].label }}</span></li>
		</ul>
	</div>
</template>