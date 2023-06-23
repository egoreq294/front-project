import React from 'react';
import { About } from '@pages/About';
import { Main } from '@pages/Main';
import { RouteProps } from 'react-router-dom';
import { NotFound } from '@pages/NotFound';

export enum AppRoutes {
  MAIN = 'main',
  ABOUT = 'about',
  NOT_FOUND = 'not_found',
}

export const routePath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: '/',
  [AppRoutes.ABOUT]: '/about',
  [AppRoutes.NOT_FOUND]: '*',
};

export const routeConfig: RouteProps[] = [
  { path: routePath.main, element: <Main /> },
  { path: routePath.about, element: <About /> },
  { path: routePath.not_found, element: <NotFound /> },
];
