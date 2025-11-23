<script setup lang="ts">
	const props = withDefaults(
		defineProps<{
			title: string
			subtitle: string
			fields: string[]
			color: string
			index: number
			isLast?: boolean
			focused?: boolean
		}>(),
		{
			isLast: false,
			focused: false
		}
	)

	const baseColor = '#63606f'
</script>
<template>
	<div class="cursor-default flex text-left">
		<div class="flex flex-col items-center w-12">
			<div class="w-1 h-7.5" v-if="index == 0"></div>
			<div class="w-1 h-7.5 duration-500" :style="{
				backgroundColor: props.focused ? props.color : baseColor,
				opacity: +!!props.focused,
				transitionDelay: (props.index * 300) + 150 + 'ms'
		}" v-else></div>

			<div
				class="border-4 border-zinc-500 rounded-full w-6 h-6 duration-500"
				:style="{
					borderColor: props.focused ? props.color : baseColor,
					opacity: +!!props.focused,
					transitionDelay: (props.index * 300) + 150 + 'ms'
				}"
			></div>

			<div class="grow w-1" v-if="isLast"></div>
			<div class="grow w-1 duration-500" :style="{
				backgroundColor: props.focused ? props.color : baseColor,
				opacity: +!!props.focused,
				transitionDelay: (props.index * 300) + 150 + 'ms'
			}" v-else></div>
		</div>
		<div class="px-4 py-6 transition-all duration-2000 ease-in-out" :style="{
			transform: props.focused ? 'translateX(0)' : 'translateX(-960px)',
			opacity: +!!props.focused,
			transitionDelay: (props.index * 300) + 'ms'
		}">
			<h3 class="text-xl font-semibold sm:text-2xl lg:text-3xl">{{ props.title }}</h3>
			<p class="text-white/75 font-medium sm:text-lg lg:text-xl">{{ props.subtitle }}</p>
			<p class="text-white/30" v-for="(field, idx) in props.fields" :key="idx">{{ field }}</p>
		</div>
	</div>
</template>