import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'

import SettingParking from './components/SettingParking.vue'

const routes = [
  {
    path: '/',
    name: 'root',
    component: App
  },
  {
    path: '/user/settingParking',
    name: 'settingParking',
    component: SettingParking
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
