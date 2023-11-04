import cn from 'classnames';
import React, { FC, memo } from 'react';

import { Loader } from '@shared/ui/Loader';

import styles from './styles.module.scss';

interface PageLoaderProps {
  className?: string;
}

export const PageLoader: FC<PageLoaderProps> = memo(({ className }) => {
  return (
    <div className={cn(styles.PageLoader, className)}>
      <Loader />
    </div>
  );
});
