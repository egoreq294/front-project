import React from 'react';
import { ReactElement } from 'react';

import { AppRoutes } from '@shared/constants/router';
import { useRouteChange } from '@shared/lib/router/useRouteChange';
import { ScrollToolbar } from '@widgets/ScrollToolbar';

export const useAppToolbar = (): ReactElement | undefined => {
  const currentRoute = useRouteChange();
  const toolbarByAppRoute: Partial<Record<AppRoutes, ReactElement>> = {
    [AppRoutes.ARTICLES]: <ScrollToolbar />,
    [AppRoutes.ARTICLE_DETAILS]: <ScrollToolbar />,
  };

  return toolbarByAppRoute?.[currentRoute];
};
