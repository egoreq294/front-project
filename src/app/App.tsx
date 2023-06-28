import './styles/index.scss';
import React, { FC, Suspense } from 'react';
import { Navbar } from '@widgets/Navbar';
import cn from 'classnames';
import { Sidebar } from '@widgets/Sidebar';
import styles from './styles.module.scss';
import { AppRouter } from './providers/router';

export const App: FC = () => {
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
