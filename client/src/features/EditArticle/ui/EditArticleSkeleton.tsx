import React, { FC } from 'react';

import { Skeleton } from '@shared/ui/Skeleton';
import { HStack, VStack } from '@shared/ui/Stack';

export const EditArticleSkeleton: FC = () => {
  return (
    <HStack gap="16" fullWidth align="start">
      <VStack gap="16" fullWidth>
        <Skeleton width="100%" height={116} />
        <Skeleton width="100%" height={116} />
        <Skeleton width="100%" height={116} />
        <Skeleton width="100%" height={120} />
      </VStack>
      <Skeleton width={264} height={216} />
    </HStack>
  );
};
