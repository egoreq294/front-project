import cn from 'classnames';
import React, { FC, Suspense, useEffect } from 'react';
import { useSelector } from 'react-redux';

import { getUserInited, userActions } from '@entities/User';
import { useAppDispatch } from '@shared/lib/hooks/useAppDispatch';
import { Navbar } from '@widgets/Navbar';
import { Sidebar } from '@widgets/Sidebar';
import { AppRouter } from './providers/router';

import './styles/index.scss';
import styles from './styles.module.scss';

export const App: FC = () => {
  const dispatch = useAppDispatch();
  const inited = useSelector(getUserInited);

  useEffect(() => {
    dispatch(userActions.initAuthData());
  }, [dispatch]);

  return (
    <div className={cn(styles.App)}>
      <Suspense fallback="">
        <Navbar />
        <div className={styles.Content}>
          <Sidebar />
          {inited && <AppRouter />}
        </div>
      </Suspense>
    </div>
  );
};
