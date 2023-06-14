import React, { FC } from "react";
import "./styles/index.scss";

import { useTheme } from "./providers/ThemeProvider";
import { AppRouter } from "./providers/router";
import { Navbar } from "@widgets/Navbar";

import cn from "classnames";

export const App: FC = () => {
  const { theme } = useTheme();

  return (
    <div className={cn("app", theme)}>
      <Navbar />
      <AppRouter />
    </div>
  );
};
