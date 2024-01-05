import React, { FC } from 'react';

import { Skeleton } from '@shared/ui/Skeleton';
import { VStack } from '@shared/ui/Stack';

export const ArticleDetailsSkeleton: FC = () => {
  return (
    <VStack gap="24" fullWidth>
      <Skeleton width={300} height={32} />
      <Skeleton width={600} height={24} />
      <Skeleton width={'100%'} height={200} />
      <Skeleton width={'100%'} height={200} />
    </VStack>
  );
};
