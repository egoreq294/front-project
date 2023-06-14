import { About } from "@pages/About";
import { Main } from "@pages/Main";
import { routeConfig } from "@shared/config/routeConfig/routeConfig";
import React, { FC, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

export const AppRouter: FC = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        {routeConfig.map(({ path, element }) => (
          <Route key={path} path={path} element={element} />
        ))}
      </Routes>
    </Suspense>
  );
};
