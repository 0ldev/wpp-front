import { createRouter, createWebHistory } from 'vue-router';
import MainRoutes from './MainRoutes';
import PublicRoutes from './PublicRoutes';
import { useUIStore } from '@/stores/ui';
import { supabase } from '@/auth/supabase';

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/:pathMatch(.*)*',
      component: () => import('@/views/pages/maintenance/error/Error404Page.vue')
    },
    MainRoutes,
    PublicRoutes
  ]
});
~
router.beforeEach(async (to, from, next) => {
  const publicPages = ['/'];
  const { data: { session } } = await supabase.auth.getSession();

  const isPublicPage = publicPages.includes(to.path);
  const authRequired = !isPublicPage && to.matched.some((record) => record.meta.requiresAuth);

  // User not logged in and trying to access a restricted page
  if (authRequired && !session) {
    next('/home');
  } else if (session && to.path === '/home') {
    // User logged in and trying to access the login page
    next({
      query: {
        ...to.query,
        redirect: to.fullPath !== '/' ? to.fullPath : undefined
      }
    });
  } else {
    // All other scenarios, either public page or authorized access
    next();
  }
});

router.beforeEach(() => {
  const uiStore = useUIStore();
  uiStore.isLoading = true;
});

router.afterEach(() => {
  const uiStore = useUIStore();
  uiStore.isLoading = false;
});
