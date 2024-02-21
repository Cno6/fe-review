import { HomeRoute, AboutRoute } from 'shared/constants/router'

export default [
  {
    ...HomeRoute,
    component: () => import('pages/Home')
  },
  {
    ...AboutRoute,
    component: () => import('pages/About')
  }
]