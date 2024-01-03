import React, { FC } from 'react';

import { Skeleton } from '@shared/ui/deprecated/Skeleton';

import styles from './styles.module.scss';

export const ArticleDetailsSkeleton: FC = () => {
  return (
    <div>
      <Skeleton
        className={styles.Avatar}
        width={200}
        height={200}
        borderRadius="50%"
      />
      <Skeleton className={styles.Title} width={300} height={32} />
      <Skeleton className={styles.Skeleton} width={600} height={24} />
      <Skeleton className={styles.Skeleton} width={'100%'} height={200} />
      <Skeleton className={styles.Skeleton} width={'100%'} height={200} />
    </div>
  );
};
