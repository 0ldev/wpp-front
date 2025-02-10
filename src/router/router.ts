import { createRouter, createWebHistory } from 'vue-router';
import PublicRoutes from './PublicRoutes';
import MainRoutes from './MainRoutes';

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    /*    {
          path: '/:pathMatch(.*)*',
          component: () => import('@/views/pages/maintenance/error/Error404Page.vue')
        },*/
    MainRoutes,
    PublicRoutes
  ]
});
