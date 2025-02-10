const MainRoutes = {
  path: '/',
  component: () => import('@/layouts/main/MainLayout.vue'),
  meta: {
    //requiresAuth: true
  },
  //redirect: '/',
  children: [
    {
      name: 'Dashboard',
      path: '/dashboard'
    }
  ]
};

export default MainRoutes;
