import React, { FC } from 'react';

import { Skeleton } from '@shared/ui/Skeleton';
import { ArticleViewMode } from '../../model/types/article';

import styles from './styles.module.scss';

interface ArticleListItemProps {
  viewMode: ArticleViewMode;
}

export const ArticleListSkeleton: FC<ArticleListItemProps> = ({ viewMode }) => {
  if (viewMode === 'List') {
    return (
      <>
        <Skeleton width="100%" height={300} />
        <Skeleton width="100%" height={300} />
        <Skeleton width="100%" height={300} />
      </>
    );
  }

  return (
    <>
      <Skeleton className={styles.PlateSkeleton} />
      <Skeleton className={styles.PlateSkeleton} />
      <Skeleton className={styles.PlateSkeleton} />
      <Skeleton className={styles.PlateSkeleton} />
      <Skeleton className={styles.PlateSkeleton} />
      <Skeleton className={styles.PlateSkeleton} />
      <Skeleton className={styles.PlateSkeleton} />
      <Skeleton className={styles.PlateSkeleton} />
      <Skeleton className={styles.PlateSkeleton} />
    </>
  );
};
