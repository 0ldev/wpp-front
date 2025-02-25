const PublicRoutes = {
  path: '/auth',
  component: () => import('@/layouts/blank/BlankLayout.vue'),
  meta: {
    requiresAuth: false
  },
  children: [
    {
      name: 'home',
      path: '/home',
      component: () => import('@/views/public/Home.vue')
    },
/*    {
      name: 'Register',
      path: '/register',
      component: () => import('@/views/authentication/auth/RegisterPage.vue')
    },*/
    {
      name: 'Error 404',
      path: '/error',
      component: () => import('@/views/pages/maintenance/error/Error404Page.vue')
    }
  ]
};

export default PublicRoutes;
