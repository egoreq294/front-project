export enum AppRoutes {
  MAIN = 'main',
  ABOUT = 'about',
  PROFILE = 'profile',
  ARTICLES = 'articles',
  ARTICLE_DETAILS = 'article_details',
  ARTICLE_CREATE = 'article_create',
  ARTICLE_EDIT = 'article_edit',
  ADMIN_PANEL = 'admin_panel',
  FORBIDDEN = 'forbidden',
  NOT_FOUND = 'not_found',
}

export const routePath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: '/',
  [AppRoutes.ABOUT]: '/about',
  [AppRoutes.PROFILE]: '/profile/:id',
  [AppRoutes.ARTICLES]: '/articles',
  [AppRoutes.ARTICLE_DETAILS]: '/articles/:id',
  [AppRoutes.ARTICLE_CREATE]: '/articles/create',
  [AppRoutes.ARTICLE_EDIT]: '/articles/:id/edit',
  [AppRoutes.ADMIN_PANEL]: '/admin',
  [AppRoutes.FORBIDDEN]: '/forbidden',
  [AppRoutes.NOT_FOUND]: '*',
};

export const appRouteByPath: Record<string, AppRoutes> = {
  '/': AppRoutes.MAIN,
  '/about': AppRoutes.ABOUT,
  '/profile/:id': AppRoutes.PROFILE,
  '/articles': AppRoutes.ARTICLES,
  '/articles/:id': AppRoutes.ARTICLE_DETAILS,
  '/articles/create': AppRoutes.ARTICLE_CREATE,
  '/articles/:id/edit': AppRoutes.ARTICLE_EDIT,
  '/admin': AppRoutes.ADMIN_PANEL,
  '/forbidden': AppRoutes.FORBIDDEN,
};
