import { createRouter, createWebHistory } from 'vue-router'
import CarStockPage from '@/pages/CarStockPage.vue'
import AddCarPage from '@/pages/AddCarPage.vue'
import RemoveCarPage from '@/pages/RemoveCarPage.vue'
import FindCarPage from '@/pages/FindCarPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'consultar',
      component: CarStockPage
    },
    {
      path: '/adicionar',
      name: 'adicionar',
      component: AddCarPage
    },
    {
      path: '/excluir',
      name: 'excluir',
      component: RemoveCarPage
    },
    {
      path: '/buscar',
      name: 'buscar',
      component: FindCarPage
    }
  ]
})

export default router
