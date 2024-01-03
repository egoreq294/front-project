import React, { FC } from 'react';

import { Skeleton } from '@shared/ui/deprecated/Skeleton';

import styles from './styles.module.scss';

export const CommentListSkeleton: FC = () => {
  return (
    <div className={styles.CommentList}>
      <div className={styles.CommentItem}>
        <div className={styles.UserInfo}>
          <Skeleton width={30} height={30} borderRadius="50%" />
          <Skeleton height={16} width={100} />
        </div>
        <Skeleton width="100%" height={50} />
      </div>
      <div className={styles.CommentItem}>
        <div className={styles.UserInfo}>
          <Skeleton width={30} height={30} borderRadius="50%" />
          <Skeleton height={16} width={100} />
        </div>
        <Skeleton width="100%" height={50} />
      </div>
      <div className={styles.CommentItem}>
        <div className={styles.UserInfo}>
          <Skeleton width={30} height={30} borderRadius="50%" />
          <Skeleton height={16} width={100} />
        </div>
        <Skeleton width="100%" height={50} />
      </div>
    </div>
  );
};
