import { routeConfig } from '@shared/config/routeConfig/routeConfig';
import { PageLoader } from '@widgets/PageLoader';
import React, { FC, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { RequireAuth } from './RequireAuth';

export const AppRouter: FC = () => {
  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        {routeConfig.map(({ path, element, authOnly }) => (
          <Route
            key={path}
            path={path}
            element={
              authOnly ? (
                <RequireAuth>
                  <>{element}</>
                </RequireAuth>
              ) : (
                element
              )
            }
          />
        ))}
      </Routes>
    </Suspense>
  );
};
