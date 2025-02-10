const PublicRoutes = {
  path: '/home',
  component: () => import('@/layouts/blank/BlankLayout.vue'),
  meta: {
    requiresAuth: false
  },
  children: [
    {
      path: '',
      component: () => import('@/views/public/Home.vue')
    },
  ]
};

export default PublicRoutes;
