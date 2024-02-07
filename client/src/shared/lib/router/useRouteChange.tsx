import { useEffect, useState } from 'react';
import { matchPath, useLocation } from 'react-router-dom';

import { appRouteByPath, AppRoutes } from '@shared/constants/router';

export const useRouteChange = (): AppRoutes => {
  const location = useLocation();
  const [appRoute, setAppRoute] = useState<AppRoutes>(AppRoutes.ARTICLES);

  useEffect(() => {
    Object.entries(appRouteByPath).forEach(([pattern, route]) => {
      if (matchPath(pattern, location.pathname)) {
        setAppRoute(route);
      }
    });
  }, [location.pathname]);

  return appRoute;
};
