import React from 'react';
import { RouteProps } from 'react-router-dom';

import { UserRoleEnum } from '@entities/User';
import { AboutPage } from '@pages/AboutPage';
import { AdminPanelPage } from '@pages/AdminPanelPage';
import { ArticleCreatePage } from '@pages/ArticleCreatePage';
import { ArticleDetailsPage } from '@pages/ArticleDetailsPage';
import { ArticleEditPage } from '@pages/ArticleEditPage';
import { ArticlesPage } from '@pages/ArticlesPage';
import { ForbiddenPage } from '@pages/ForbiddenPage';
import { MainPage } from '@pages/MainPage';
import { NotFoundPage } from '@pages/NotFoundPage';
import { ProfilePage } from '@pages/ProfilePage';

type AppRoutesProps = RouteProps & {
  authOnly?: boolean;
  roles?: UserRoleEnum[];
};

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

export const routeConfig: AppRoutesProps[] = [
  { path: routePath.main, element: <MainPage /> },
  { path: routePath.about, element: <AboutPage /> },
  { path: routePath.profile, element: <ProfilePage />, authOnly: true },
  { path: routePath.articles, element: <ArticlesPage />, authOnly: true },
  {
    path: routePath.article_details,
    element: <ArticleDetailsPage />,
    authOnly: true,
  },
  {
    path: routePath.article_create,
    element: <ArticleCreatePage />,
    authOnly: true,
  },
  {
    path: routePath.article_edit,
    element: <ArticleEditPage />,
    authOnly: true,
  },
  {
    path: routePath.admin_panel,
    element: <AdminPanelPage />,
    authOnly: true,
    roles: [UserRoleEnum.ADMIN],
  },
  {
    path: routePath.forbidden,
    element: <ForbiddenPage />,
  },
  { path: routePath.not_found, element: <NotFoundPage /> },
];
