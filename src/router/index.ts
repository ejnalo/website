import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/HomeView.vue'
import ProjectsView from '../views/ProjectsView.vue'
import PortfolioView from '../views/PortfolioView.vue'

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			name: 'accueil',
			component: HomeView
		},
		{
			path: '/portfolio',
			name: 'portfolio',
			component: PortfolioView
		},
		{
			path: '/projects',
			name: 'projets',
			component: ProjectsView
		}
	],
})

export default router
