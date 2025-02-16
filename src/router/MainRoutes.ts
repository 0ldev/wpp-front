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
      component: () => import('@/views/_main/group/GroupsView.vue')
    },
    {
      name: 'Profile',
      path: '/profile',
      component: () => import('@/views/_main/profile/ProfileView.vue')
    },
    {
      name: 'Teste',
      path: '/teste',
      component: () => import('@/views/_main/TesteView.vue')
    },
  ]
};

export default MainRoutes;
