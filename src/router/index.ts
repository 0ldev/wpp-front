import { createRouter, createWebHistory } from 'vue-router';
import MainRoutes from './MainRoutes';
import PublicRoutes from './PublicRoutes';
import { useUIStore } from '@/stores/ui';
import { auth } from '@/auth/firebase';

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

/*// Assuming you have a type/interface for your authentication store
interface AuthStore {
  user: User | null;
  returnUrl: string | null;
  login(username: string, password: string): Promise<void>;
  logout(): void;
}*/

router.beforeEach(async (to, from, next) => {
  // redirect to login page if not logged in and trying to access a restricted page
  const publicPages = ['/'];

  const isPublicPage = publicPages.includes(to.path);
  const authRequired = !isPublicPage && to.matched.some((record) => record.meta.requiresAuth);
  /*
  // User not logged in and trying to access a restricted page
  if (authRequired && !auth.user) {
    //auth.returnUrl = to.fullPath; // Save the intended page
    //next('/home');
    next();
  } else if (auth.user && to.path === '/home') {
    // User logged in and trying to access the login page
    next({
      query: {
        ...to.query,
        redirect: auth.returnUrl !== '/' ? to.fullPath : undefined
      }
    });
  } else {
    // All other scenarios, either public page or authorized access
    next();
  }*/
  next();
});

router.beforeEach(() => {
  const uiStore = useUIStore();
  uiStore.isLoading = true;
});

router.afterEach(() => {
  const uiStore = useUIStore();
  uiStore.isLoading = false;
});
