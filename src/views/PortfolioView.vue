<script setup lang="ts">
	import Navbar from '@/components/layout/Navbar.vue';
	import Footer from '@/components/layout/Footer.vue';
</script>
<template>
	<Navbar />
	<main id="content" class="bg-black pt-8 space-y-8 sm:pt-16 sm:space-y-12 lg:space-y-16 xl:space-y-24">
		<section class="px-8 space-y-8 sm:px-16 sm:space-y-16 xl:w-2/3 xl:mx-auto xl:space-y-16">
			<div class="text-center">
				<h2 class="text-2xl font-bold sm:text-4xl lg:text-5xl">Photos</h2>
				<p class="text-white/50 italic">Préférer l'image aux mots</p>
			</div>
			<div>
				<div class="grid grid-cols-1 sm:grid-cols-2">
					<img src="https://live.staticflickr.com/65535/55006469320_f7698fae33_b.jpg" alt="" class="" />
					<img src="https://live.staticflickr.com/65535/55006469340_7c2f65bd50_b.jpg" alt="" class="" />
					<img src="https://live.staticflickr.com/65535/55006329618_43941d1573_b.jpg" alt="" class="" />
					<img src="https://live.staticflickr.com/65535/55006329628_71929ea731_b.jpg" alt="" class="" />
				</div>
				<legend class="text-white/50 italic mt-2 sm:mt-4"><a href="https://www.flickr.com/gp/ejnalo/7qhJvZi98o">Shooting entre amis, Paris, 2025</a></legend>
			</div>
			<div>
				<div class="grid grid-cols-1 sm:grid-cols-3">
					<img src="https://live.staticflickr.com/65535/55029469924_510e66eaa4_b.jpg" alt="Photo du groupe KALUPTO au Sum Case #3" class="" />
					<img src="https://live.staticflickr.com/65535/55028316852_b4c1814dca_b.jpg" alt="Photo n°2 du groupe KALUPTO au Sum Case #3" class="" />
					<img src="https://live.staticflickr.com/65535/55028316797_f2428651ef_b.jpg" alt="Photo n°3 du groupe KALUPTO au Sum Case #3" class="" />
				</div>
				<div class="grid grid-cols-1 sm:grid-cols-2">
					<img src="https://live.staticflickr.com/65535/55029547770_47488e37ea_b.jpg" alt="Photo n°4 du groupe KALUPTO au Sum Case #3" class="" />
					<img src="https://live.staticflickr.com/65535/55029396623_dd2fee0776_b.jpg" alt="Photo n°5 du groupe KALUPTO au Sum Case #3" class="" />
				</div>
				<legend class="text-white/50 italic mt-2 sm:mt-4">Sum Case #3, Sèvres, 2025</legend>
			</div>
			<div>
				<div class="grid grid-cols-1 sm:grid-cols-3">
					<img src="/pf_img/aiguilleurs_1.jpg" alt="Photo du groupe Elektre au festival des Aiguilleurs" class="" />
					<img src="/pf_img/aiguilleurs_2.jpg" alt="Photo n°2 du groupe Elektre au festival des Aiguilleurs" class="" />
					<img src="/pf_img/aiguilleurs_3.jpg" alt="Photo n°3 du groupe Elektre au festival des Aiguilleurs" class="" />
				</div>
				<legend class="text-white/50 italic mt-2 sm:mt-4">Festival des Aiguilleurs, Sèvres, 2025</legend>
			</div>
			<div>
				<div class="grid grid-cols-1 sm:grid-cols-2">
					<img src="/pf_img/smus_1.jpg" alt="Photo du groupe Blaus Kissen à la Seine Musicale" class="" />
					<img src="/pf_img/smus_2.jpg" alt="Photo n°2 du groupe Blaus Kissen à la Seine Musicale" class="" />
				</div>
				<legend class="text-white/50 italic mt-2 sm:mt-4">Seine Musicale, Boulogne-Billancourt, 2025</legend>
			</div>
		</section>
		<section class="px-8 space-y-8 sm:px-16 sm:space-y-16 xl:w-2/3 xl:mx-auto xl:space-y-16">
			<div class="text-center space-y-2 sm:space-y-4">
				<h2 class="text-xl italic font-bold sm:text-3xl lg:text-4xl">À l'affût de la romance du quotidien</h2>
			</div>
			<div>
				<div class="grid grid-cols-1 sm:grid-cols-3">
					<img src="/pf_img/metro.jpg" alt="Photo d'une rame MP05 à la station de métro Bir-Hakeim (ligne 6)" class="" />
					<img src="/pf_img/fall_1.jpg" alt="Photo de la Tour Eiffel depuis l'Avenue des Camoëns (16e)" class="" />
					<img src="/pf_img/fleur.jpg" alt="Photo d'une fleur" class="" />
					<img src="/pf_img/rdm_4.jpg" alt="Photo de dominos collés en mots croisés sur un mur, se lisant « love yourself, free yourself, help yourself »" class="" />
					<img src="/pf_img/fall_2.jpg" alt="Photo d'une rue vide avec des voitures stationnée et deux voitures en circulation" class="" />
					<img src="/pf_img/rdm_2.jpg" alt="Photo d'une voiture de police devant le musée du Louvre" class="" />
					<img src="/pf_img/voiture.jpg" alt="Photo d'une voiture en-dessous de la station de métro Bir-Hakeim (ligne 6)" class="" />
					<img src="/pf_img/rdm_3.jpg" alt="Photo d'un grand immeuble entre deux autres immeubles" class="" />
					<img src="/pf_img/rdm_1.jpg" alt="Reflet d'une plaque d'immatriculation sous une moto" class="" />
				</div>
			</div>
		</section>
		<section class="px-8 space-y-8 sm:px-16 sm:space-y-16 xl:w-2/3 xl:mx-auto xl:space-y-16">
			<div class="text-center">
				<h2 class="text-2xl font-bold sm:text-4xl lg:text-5xl">Créations</h2>
			</div>
			<div class="space-y-4 sm:space-y-8">
				<div class="grid grid-cols-1 sm:grid-cols-2">
					<img src="/pf_img/cover_cav.png" alt="Page de couverture du carnet de création que j'ai créé en spécialité CAV" class="row-span-2" />
					<img src="/pf_img/moodboard_1.png" alt="Moodboard montrant des images ayant un rapport avec la coccinelle" class="" />
					<img src="/pf_img/moodboard_2.png" alt="Moodboard montrant des motifs ressemblant à ceux de la coccinelle" class="" />
				</div>
			</div>
		</section>
		<section class="px-8 space-y-8 sm:px-16 sm:space-y-16 xl:w-2/3 xl:mx-auto xl:space-y-16">
			<div class="text-center">
				<h2 class="text-2xl font-bold sm:text-4xl lg:text-5xl">Interfaces</h2>
			</div>
			<div class="space-y-4 sm:space-y-8">
				<div class="grid grid-cols-2 sm:grid-cols-4">
					<img src="/pf_img/Beam.png" alt="Maquette d'un réseau social" class="" />
					<img src="/pf_img/PearlOS.png" alt="Maquette d'un système d'exploitation" class="row-span-2" />
					<img src="/pf_img/BetterDiscord.png" alt="Maquette d'une interface de Discord améliorée" class="" />
					<img src="/pf_img/Scratch4.png" alt="Maquette d'une interface de Scratch 4.0" class="" />
				</div>
			</div>
			<div class="space-y-4 sm:space-y-8">
				<div class="grid grid-cols-1">
					<img src="/pf_img/Profile.png" alt="Maquette d'un réseau social sur ordinateur" class="" />
					<img src="/pf_img/Vencat.png" alt="Emploi du temps amélioré pour mon IUT" class="row-span-2" />
				</div>
			</div>
		</section>
	</main>
	<Footer />
</template>