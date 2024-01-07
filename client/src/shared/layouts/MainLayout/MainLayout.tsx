import cn from 'classnames';
import React, { FC, ReactElement } from 'react';

import styles from './styles.module.scss';

interface MainLayoutProps {
  className?: string;
  header?: ReactElement;
  content?: ReactElement;
  sidebar?: ReactElement;
  toolbar?: ReactElement;
}

export const MainLayout: FC<MainLayoutProps> = ({
  className,
  header,
  content,
  sidebar,
  toolbar,
}) => {
  return (
    <div className={cn(styles.MainLayout, className)}>
      <div className={styles.Sidebar}>{sidebar}</div>
      <div className={styles.Content}>{content}</div>
      <div className={styles.Rightbar}>
        <div className={styles.Header}>{header}</div>
        <div className={styles.Toolbar}>{toolbar}</div>
      </div>
    </div>
  );
};
