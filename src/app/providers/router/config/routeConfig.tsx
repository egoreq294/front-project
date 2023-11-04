import React from 'react';

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
import { routePath } from '@shared/constants/router';
import { AppRoutesProps } from '@shared/types/roles';

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
