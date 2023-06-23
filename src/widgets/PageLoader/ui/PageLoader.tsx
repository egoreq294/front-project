import React, { FC } from 'react';
import cn from 'classnames';
import styles from './styles.module.scss';
import { Loader } from '@shared/ui/Loader/Loader';

interface PageLoaderProps {
  className?: string;
}

export const PageLoader: FC<PageLoaderProps> = ({ className }) => {
  return (
    <div className={cn(styles.PageLoader, className)}>
      <Loader />
    </div>
  );
};
