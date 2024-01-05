import { memo } from 'react';
import React from 'react';

import { Skeleton } from '@shared/ui/Skeleton';
import { HStack, VStack } from '@shared/ui/Stack';
import { MainLayout } from '../MainLayout';

import styles from './styles.module.scss';

export const AppLoaderLayout = memo(() => {
  return (
    <MainLayout
      header={
        <HStack className={styles.Header}>
          <Skeleton width={48} height={48} borderRadius="50%" />
        </HStack>
      }
      content={
        <VStack gap="16" style={{ height: '100%' }}>
          <Skeleton width="70%" height={32} borderRadius="6px" />
          <Skeleton width="40%" height={20} borderRadius="6px" />
          <Skeleton width="50%" height={20} borderRadius="6px" />
          <Skeleton width="30%" height={32} borderRadius="6px" />
          <Skeleton width="80%" height="40%" borderRadius="6px" />
          <Skeleton width="80%" height="40%" borderRadius="6px" />
        </VStack>
      }
      sidebar={<Skeleton borderRadius="6px" width={220} height="100%" />}
    />
  );
});
