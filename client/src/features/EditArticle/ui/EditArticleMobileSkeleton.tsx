import React, { FC } from 'react';

import { Skeleton } from '@shared/ui/Skeleton';
import { VStack } from '@shared/ui/Stack';

export const EditArticleMobileSkeleton: FC = () => {
  return (
    <VStack gap="16" fullWidth>
      <Skeleton width="100%" height={116} />
      <Skeleton width="100%" height={116} />
      <Skeleton width="100%" height={116} />
      <Skeleton width="100%" height={120} />
    </VStack>
  );
};
