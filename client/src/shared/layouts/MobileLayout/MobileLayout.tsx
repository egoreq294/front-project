import cn from 'classnames';
import React, { FC, ReactElement } from 'react';

import styles from './styles.module.scss';

interface MobileLayoutProps {
  className?: string;
  header?: ReactElement;
  content?: ReactElement;
}

export const MobileLayout: FC<MobileLayoutProps> = ({
  className,
  header,
  content,
}) => {
  return (
    <div className={cn(styles.MainLayout, className)}>
      <div className={styles.Header}>{header}</div>
      <div className={styles.Content}>{content}</div>
    </div>
  );
};
