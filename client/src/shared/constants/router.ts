export enum AppRoutes {
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
  [AppRoutes.ARTICLES]: '/',
  [AppRoutes.PROFILE]: '/profile/:id',
  [AppRoutes.ARTICLE_DETAILS]: '/articles/:id',
  [AppRoutes.ARTICLE_CREATE]: '/articles/create',
  [AppRoutes.ARTICLE_EDIT]: '/articles/:id/edit',
  [AppRoutes.ADMIN_PANEL]: '/admin',
  [AppRoutes.FORBIDDEN]: '/forbidden',
  [AppRoutes.NOT_FOUND]: '*',
};

export const appRouteByPath: Record<string, AppRoutes> = {
  '/': AppRoutes.ARTICLES,
  '/profile/:id': AppRoutes.PROFILE,
  '/articles/:id': AppRoutes.ARTICLE_DETAILS,
  '/articles/create': AppRoutes.ARTICLE_CREATE,
  '/articles/:id/edit': AppRoutes.ARTICLE_EDIT,
  '/admin': AppRoutes.ADMIN_PANEL,
  '/forbidden': AppRoutes.FORBIDDEN,
};
