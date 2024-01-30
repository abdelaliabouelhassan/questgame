import { createRouter, createWebHistory } from 'vue-router'
//componentes

import Index from '@/components/pages/home.vue'
const routes = [
  { path: '/', component: Index, name: 'home' },
 
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router;