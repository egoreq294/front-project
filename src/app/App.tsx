import "./styles/index.scss";
import React, { FC, Suspense } from "react";
import { useTheme } from "./providers/ThemeProvider";
import { AppRouter } from "./providers/router";
import { Navbar } from "@widgets/Navbar";
import cn from "classnames";
import { Sidebar } from "@widgets/Sidebar";
import styles from "./styles.module.scss";
import { useTranslation } from "react-i18next";

export const App: FC = () => {
  const { theme } = useTheme();

  return (
    <div className={cn(styles.App, theme)}>
      <Suspense fallback="">
        <Navbar />
        <div className={styles.Content}>
          <Sidebar />
          <div className={styles.PageWrapper}>
            <AppRouter />
          </div>
        </div>
      </Suspense>
    </div>
  );
};
