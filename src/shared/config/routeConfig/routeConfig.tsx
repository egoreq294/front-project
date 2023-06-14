import React from "react";
import { About } from "@pages/About";
import { Main } from "@pages/Main";
import { RouteProps } from "react-router-dom";

export enum AppRoutes {
  MAIN = "main",
  ABOUT = "about",
}

export const routePath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: "/",
  [AppRoutes.ABOUT]: "/about",
};

export const routeConfig: RouteProps[] = [
  { path: routePath.main, element: <Main /> },
  { path: routePath.about, element: <About /> },
];
