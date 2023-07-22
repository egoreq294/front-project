import './styles/index.scss';
import React, { FC, Suspense, useEffect } from 'react';
import { Navbar } from '@widgets/Navbar';
import cn from 'classnames';
import { Sidebar } from '@widgets/Sidebar';
import styles from './styles.module.scss';
import { AppRouter } from './providers/router';
import { userActions } from '@entities/User';
import { useAppDispatch } from '@shared/lib/hooks/useAppDispatch';

export const App: FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(userActions.initAuthData());
  }, []);

  return (
    <div className={cn(styles.App)}>
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
