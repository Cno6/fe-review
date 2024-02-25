import { AboutRoute, HomeRoute, NotFoundRoute } from 'shared/constants/router'

export default [
  {
    ...HomeRoute,
    component: () => import('pages/Home'),
  },
  {
    ...AboutRoute,
    component: () => import('pages/About'),
  },
  {
    ...NotFoundRoute,
    component: () => import('pages/NotFound'),
  },
]
