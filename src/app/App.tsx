import React, { FC, Suspense, useEffect } from 'react';
import { useSelector } from 'react-redux';

import { getUserInited, useJsonSettings } from '@entities/User';
import { initAuthData } from '@entities/User';
import { EMPTY_STRING } from '@shared/constants/common';
import { MainLayout } from '@shared/layouts';
import { AppLoaderLayout } from '@shared/layouts/AppLoaderLayout';
import { useAppDispatch } from '@shared/lib/hooks/useAppDispatch';
import { Navbar } from '@widgets/Navbar';
import { Sidebar } from '@widgets/Sidebar';
import { useAppToolbar } from './lib/hooks/useAppToolbar';
import { AppRouter } from './providers/router';
import { ThemeProvider } from './providers/ThemeProvider';

import './styles/index.scss';
import styles from './styles.module.scss';

export const App: FC = () => {
  const dispatch = useAppDispatch();
  const inited = useSelector(getUserInited);

  const { theme } = useJsonSettings();

  const toolbar = useAppToolbar();

  useEffect(() => {
    dispatch(initAuthData());
  }, [dispatch]);

  if (!inited) {
    return (
      <div className={styles.App}>
        <AppLoaderLayout />
      </div>
    );
  }

  return (
    <ThemeProvider initialTheme={theme}>
      <div className={styles.App}>
        <Suspense fallback={EMPTY_STRING}>
          <MainLayout
            header={<Navbar />}
            sidebar={<Sidebar />}
            content={<AppRouter />}
            toolbar={toolbar}
          />
        </Suspense>
      </div>
    </ThemeProvider>
  );
};
