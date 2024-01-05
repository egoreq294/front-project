import React, { FC, Suspense, useEffect } from 'react';
import { useSelector } from 'react-redux';

import { getUserInited } from '@entities/User';
import { initAuthData } from '@entities/User';
import { MainLayout } from '@shared/layouts';
import { useAppDispatch } from '@shared/lib/hooks/useAppDispatch';
import { Loader } from '@shared/ui/Loader';
import { Navbar } from '@widgets/Navbar';
import { PageLoader } from '@widgets/PageLoader';
import { Sidebar } from '@widgets/Sidebar';
import { AppRouter } from './providers/router';

import './styles/index.scss';
import styles from './styles.module.scss';

export const App: FC = () => {
  const dispatch = useAppDispatch();
  const inited = useSelector(getUserInited);

  useEffect(() => {
    dispatch(initAuthData());
  }, [dispatch]);

  if (!inited) {
    return <PageLoader />;
  }

  return (
    <div className={styles.App}>
      <Suspense fallback={<Loader />}>
        <MainLayout
          header={<Navbar />}
          sidebar={<Sidebar />}
          content={<AppRouter />}
        />
      </Suspense>
    </div>
  );
};
