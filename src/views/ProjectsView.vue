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
					link="https://mmi.codes"
					image="/banner_mmi.png"
					:focused="false"
				/>
				<Project
					title="Vencat"
					description="Site permettant aux MMI de Vélizy de consulter leur emploi du temps"
					link="https://vencat.mmi.codes"
					image="/vencat.png"
					:focused="false"
				/>
				<Project
					title="Beam"
					description="Réseau social en plein développement"
					link="https://beam.ejnalo.me"
					image="/banner_beam.png"
					:focused="false"
				/>
			</div>
		</section>
	</main>
	<Footer />
</template>