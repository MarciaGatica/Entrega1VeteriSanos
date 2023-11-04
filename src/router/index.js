import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'inicio', // Nombre de la ruta de inicio
      component: () => import('../components/Inicio.vue'), // Reemplaza "Inicio" por el componente deseado
    },
    {
      path: '/catalogo',
      name: 'catalogo',
      component: () => import('../components/Catalogo.vue')
    },
    {
      path: '/CatalogoInterno',
      name: 'CatalogoInterno',
      component: () => import('../components/CatalogoInterno.vue')
    }
    // Otras rutas para roles diferentes
  ]
})

export default router
