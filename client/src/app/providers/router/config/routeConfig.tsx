import React from 'react';

import { UserRoleEnum } from '@entities/User';
import { AdminPanelPage } from '@pages/AdminPanelPage';
import { ArticleCreatePage } from '@pages/ArticleCreatePage';
import { ArticleDetailsPage } from '@pages/ArticleDetailsPage';
import { ArticleEditPage } from '@pages/ArticleEditPage';
import { ArticlesPage } from '@pages/ArticlesPage';
import { ForbiddenPage } from '@pages/ForbiddenPage';
import { NotFoundPage } from '@pages/NotFoundPage';
import { ProfilePage } from '@pages/ProfilePage';
import { routePath } from '@shared/constants/router';
import { AppRoutesProps } from '@shared/types/roles';

export const routeConfig: AppRoutesProps[] = [
  { path: routePath.articles, element: <ArticlesPage /> },
  {
    path: routePath.article_details,
    element: <ArticleDetailsPage />,
  },
  { path: routePath.profile, element: <ProfilePage />, authOnly: true },
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
