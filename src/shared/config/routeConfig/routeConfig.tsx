import React from 'react';
import { AboutPage } from '@pages/AboutPage';
import { MainPage } from '@pages/MainPage';
import { RouteProps } from 'react-router-dom';
import { NotFoundPage } from '@pages/NotFoundPage';
import { ProfilePage } from '@pages/ProfilePage';
import { ArticlesPage } from '@pages/ArticlesPage';
import { ArticleDetailsPage } from '@pages/ArticleDetailsPage';

type AppRoutesProps = RouteProps & {
  authOnly?: boolean;
};

export enum AppRoutes {
  MAIN = 'main',
  ABOUT = 'about',
  PROFILE = 'profile',
  ARTICLES = 'articles',
  ARTICLE_DETAILS = 'article_details',
  NOT_FOUND = 'not_found',
}

export const routePath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: '/',
  [AppRoutes.ABOUT]: '/about',
  [AppRoutes.PROFILE]: '/profile',
  [AppRoutes.ARTICLES]: '/articles',
  [AppRoutes.ARTICLE_DETAILS]: '/articles/:id',
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
  { path: routePath.not_found, element: <NotFoundPage /> },
];
