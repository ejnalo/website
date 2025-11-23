<script setup lang="ts">
	import Navbar from '@/components/layout/Navbar.vue';
	import Footer from '@/components/layout/Footer.vue';

	import Project from '@/components/Project.vue';
</script>
<template>
	<Navbar />
	<header class="py-8 sm:py-16 lg:py-24">
		<h1 class="text-5xl font-bold text-center sm:text-6xl lg:text-7xl">Projets</h1>
	</header>
	<main id="content" class="text-center pb-8 space-y-4 sm:pb-16 sm:space-y-12">
		<section class="px-8 space-y-8 sm:px-16 sm:space-y-12 xl:w-2/3 xl:mx-auto">
			<h2 class="text-2xl font-bold sm:text-3xl lg:text-4xl">Rendus scolaires</h2>
			<div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
				<Project
					title="SAE 105"
					description="Site web + CV"
					link="https://sae105.loan.jean.mmi-velizy.fr/"
					image="/sae105.png"
					:focused="false"
				/>
			</div>

			<h2 class="text-2xl font-bold sm:text-3xl lg:text-4xl">Projets perso</h2>
			<div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
				<Project
					title="MMI.codes"
					description="Portail pour les étudiants du BUT MMI de Vélizy"
					link="https://github.com/MMI-CODES"
					image="/banner_mmi.png"
					:focused="false"
				/>
				<Project
					title="Better CELCAT"
					description="Un emploi du temps plus beau que CELCAT"
					link="https://celcat.pages.dev"
					image="/bcelcat.png"
					:focused="false"
				/>
				<Project
					title="ArrowBit"
					description="Interpréteur de langage en ligne de commande"
					link="https://github.com/arrowbitlang"
					image="/banner_bow.png"
					:focused="false"
				/>
				<Project
					title="Nation"
					description="Démocratie 100% française sur Discord"
					link="https://github.com/1nserv"
					image="https://nationserver.pages.dev/banner.png"
					:focused="false"
				/>
			</div>
		</section>
	</main>
	<Footer />
</template>