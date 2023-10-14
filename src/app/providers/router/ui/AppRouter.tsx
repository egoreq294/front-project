import { routeConfig } from '@shared/config/routeConfig/routeConfig';
import { PageLoader } from '@widgets/PageLoader';
import React, { FC, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { RequireAuth } from './RequireAuth';
import { RequireRole } from './RequireRole';

export const AppRouter: FC = () => {
  return (
    <Routes>
      {routeConfig.map(({ path, element, authOnly, roles }) => {
        const wrappedElement = (
          <Suspense fallback={<PageLoader />}> {element}</Suspense>
        );

        return (
          <Route
            key={path}
            path={path}
            element={
              <RequireRole roles={roles}>
                <>
                  {authOnly ? (
                    <RequireAuth>
                      <>{wrappedElement}</>
                    </RequireAuth>
                  ) : (
                    wrappedElement
                  )}
                </>
              </RequireRole>
            }
          />
        );
      })}
    </Routes>
  );
};
