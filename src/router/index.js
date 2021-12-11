import { createRouter, createWebHashHistory } from 'vue-router'
import Historial from '../views/Historial.vue'

const routes = [
  {
    path: '/',
    name: 'Historial',
    component: Historial
  },

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
