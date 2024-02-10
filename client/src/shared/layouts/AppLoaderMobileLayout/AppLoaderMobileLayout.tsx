import { memo } from 'react';
import React from 'react';

import { Skeleton } from '@shared/ui/Skeleton';
import { HStack, VStack } from '@shared/ui/Stack';
import { MobileLayout } from '../MobileLayout';

import styles from './styles.module.scss';

export const AppLoaderMobileLayout = memo(() => {
  return (
    <MobileLayout
      header={
        <HStack className={styles.Header} justify="spaceBetween">
          <Skeleton width={20} height={20} />
          <Skeleton width={48} height={48} borderRadius="50%" />
        </HStack>
      }
      content={
        <VStack gap="16" style={{ height: '100%' }}>
          <Skeleton width="100%" height={32} borderRadius="6px" />
          <Skeleton width="100%" height="70vh" borderRadius="6px" />
        </VStack>
      }
    />
  );
});
