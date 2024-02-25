enum RouteName {
  HOME = 'home',
  ABOUT = 'about',
  NOT_FOUND = 'notFound',
}

export const HomeRoute = {
  path: '/',
  name: RouteName.HOME,
}

export const AboutRoute = {
  path: '/about',
  name: RouteName.ABOUT,
}

export const NotFoundRoute = {
  path: '/:pathMatch(.*)*',
  name: RouteName.NOT_FOUND,
}
