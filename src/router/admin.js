
export default [
  {
    path: '/admin',
    meta: { prefix: 'admin', requireAuth: true, requireGuest: false, requireAdmin: true },
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: 'dashboard',
        name: 'admin.dashboard',
        component: () => import('pages/Admin/DashboardPage.vue')
      },
      {
        path: 'crop/price',
        name: 'admin.crop.price',
        component: () => import('pages/Admin/CropPricePage.vue')
      },
      {
        path: 'slides',
        name: 'admin.slides',
        component: () => import('pages/Admin/SlidesPage.vue')
      },
      {
        path: 'advertisements',
        name: 'admin.adverts',
        component: () => import('pages/Admin/AdvertsPage.vue')
      },
      {
        path: 'advert/requests',
        name: 'admin.advert.requests',
        component: () => import('pages/Admin/AdvertsRequestsPage.vue')
      },
      {
        path: 'events',
        name: 'admin.events',
        component: () => import('pages/Admin/EventsPage.vue')
      },
      {
        path: 'soil/requirements',
        name: 'admin.soil.requirements',
        component: () => import('pages/Admin/SoilRequirementsPage.vue')
      },
      {
        path: 'disease/outbreaks',
        name: 'admin.disease.outbreaks',
        component: () => import('pages/Admin/DiseaseOutbreakPage.vue')
      },
      {
        path: 'market',
        name: 'admin.market',
        component: () => import('pages/Admin/MarketPage.vue')
      },
      {
        path: 'users',
        name: 'admin.users',
        component: () => import('pages/Admin/UsersPage.vue')
      },
    ]
  }
]
