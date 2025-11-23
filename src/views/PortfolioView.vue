<script setup lang="ts">
	import Navbar from '@/components/layout/Navbar.vue';
	import Footer from '@/components/layout/Footer.vue';
</script>
<template>
	<Navbar />
	<main id="content" class="bg-black pt-8 space-y-8 sm:pt-16 sm:space-y-12 lg:space-y-16 xl:space-y-24">
		<section class="px-8 space-y-8 sm:px-16 sm:space-y-16 xl:w-2/3 xl:mx-auto xl:space-y-16">
			<div class="text-center space-y-2 sm:space-y-4">
				<h2 class="text-2xl italic font-bold sm:text-4xl lg:text-5xl">Je ne fais pas confiance aux mots.<br /> Je fais confiance aux images.</h2>
				<p class="text-white/50 sm:text-xl lg:text-3xl">~ Gilles Peress</p>
			</div>
			<div class="space-y-2 sm:space-y-4">
				<div class="grid grid-cols-1 sm:grid-cols-3">
					<img src="/pf_img/aiguilleurs_1.jpg" alt="Photo du groupe Elektre au festival des Aiguilleurs" class="" />
					<img src="/pf_img/aiguilleurs_2.jpg" alt="Photo n°2 du groupe Elektre au festival des Aiguilleurs" class="" />
					<img src="/pf_img/aiguilleurs_3.jpg" alt="Photo n°3 du groupe Elektre au festival des Aiguilleurs" class="" />
				</div>
				<legend class="text-white/50 italic">Festival des Aiguilleurs, Sèvres, 2025</legend>
			</div>
			<div class="space-y-2 sm:space-y-4">
				<div class="grid grid-cols-1 sm:grid-cols-2">
					<img src="/pf_img/smus_1.jpg" alt="Photo du groupe Blaus Kissen à la Seine Musicale" class="" />
					<img src="/pf_img/smus_2.jpg" alt="Photo n°2 du groupe Blaus Kissen à la Seine Musicale" class="" />
				</div>
				<legend class="text-white/50 italic">Seine Musicale, Boulogne-Billancourt, 2025</legend>
			</div>
		</section>
		<section class="px-8 space-y-8 sm:px-16 sm:space-y-16 xl:w-2/3 xl:mx-auto xl:space-y-16">
			<div class="text-center space-y-2 sm:space-y-4">
				<h2 class="text-xl italic font-bold sm:text-3xl lg:text-4xl">À l'affût de la romance du quotidien</h2>
			</div>
			<div>
				<div class="grid grid-cols-1 sm:grid-cols-3">
					<img src="/pf_img/metro.jpg" alt="Photo d'une rame MP05 à la station de métro Bir-Hakeim (ligne 6)" class="" />
					<img src="/pf_img/fall_1.jpg" alt="Photo d'une rame MP05 à la station de métro Bir-Hakeim (ligne 6)" class="" />
					<img src="/pf_img/fleur.jpg" alt="Photo d'une rame MP05 à la station de métro Bir-Hakeim (ligne 6)" class="" />
					<img src="/pf_img/rdm_4.jpg" alt="Photo d'une rame MP05 à la station de métro Bir-Hakeim (ligne 6)" class="" />
					<img src="/pf_img/fall_2.jpg" alt="Photo d'une rame MP05 à la station de métro Bir-Hakeim (ligne 6)" class="" />
					<img src="/pf_img/rdm_2.jpg" alt="Photo d'une rame MP05 à la station de métro Bir-Hakeim (ligne 6)" class="" />
					<img src="/pf_img/voiture.jpg" alt="Photo d'une rame MP05 à la station de métro Bir-Hakeim (ligne 6)" class="" />
					<img src="/pf_img/rdm_3.jpg" alt="Photo d'une rame MP05 à la station de métro Bir-Hakeim (ligne 6)" class="" />
					<img src="/pf_img/rdm_1.jpg" alt="Photo d'une rame MP05 à la station de métro Bir-Hakeim (ligne 6)" class="" />
				</div>
			</div>
			<div class="space-y-4 sm:space-y-8">
				<h3 class="text-white/90 text-lg text-center font-bold sm:text-2xl lg:text-3xl">Quel animal voyez-vous ?</h3>
				<div class="grid grid-cols-1 sm:grid-cols-2">
					<img src="/pf_img/moodboard_1.png" alt="Photo d'une rame MP05 à la station de métro Bir-Hakeim (ligne 6)" class="" />
					<img src="/pf_img/moodboard_2.png" alt="Photo d'une rame MP05 à la station de métro Bir-Hakeim (ligne 6)" class="" />
				</div>
			</div>
		</section>
	</main>
	<Footer />
</template>