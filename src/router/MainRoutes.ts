const MainRoutes = {
  path: '/main',
  meta: {
    requiresAuth: true
  },
  redirect: '/main',
  component: () => import('@/layouts/main/MainLayout.vue'),
  children: [
    {
      name: 'dashboard',
      path: '/',
      component: () => import('@/views/dashboard/DefaultDashboard.vue')
    },
    {
      name: 'Session',
      path: '/session',
      component: () => import('@/views/_main/SessionView.vue')
    },
    {
      name: 'Groups',
      path: '/groups',
      component: () => import('@/views/_main/GroupsView.vue')
    },
    {
      name: 'Teste',
      path: '/teste',
      component: () => import('@/views/_main/TesteView.vue')
    },
  ]
};

export default MainRoutes;
