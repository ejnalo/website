<script setup lang="ts">
	import Header from '@/components/layout/Header.vue';
	import Footer from '@/components/layout/Footer.vue';

	import About from '@/components/layout/About.vue';
	import Education from '@/components/layout/Education.vue';
	import Skills from '@/components/layout/Skills.vue';
	import Projects from '@/components/layout/Projects.vue';
</script>
<template>
	<Header />
	<main id="content" class="relative bg-black text-center shadow-2xl shadow-black z-50 pt-4 space-y-4 scroll-smooth sm:pt-16 sm:space-y-12">
		<About />
		<Education />
		<Skills />
		<Projects />
	</main>
	<Footer />
</template>