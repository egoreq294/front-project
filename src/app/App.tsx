import './styles/index.scss';
import React, { FC, Suspense, useEffect } from 'react';
import { Navbar } from '@widgets/Navbar';
import cn from 'classnames';
import { Sidebar } from '@widgets/Sidebar';
import styles from './styles.module.scss';
import { AppRouter } from './providers/router';
import { getUserInited, userActions } from '@entities/User';
import { useAppDispatch } from '@shared/lib/hooks/useAppDispatch';
import { useSelector } from 'react-redux';

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
