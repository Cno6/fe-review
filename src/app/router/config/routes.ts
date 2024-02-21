export default [
  {
    path: '/',
    name: 'home',
    component: () => import('@/pages/HomePage/HomePage.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('@/pages/AboutPage/AboutPage.vue')
  }
]
