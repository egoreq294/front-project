import React, { FC } from 'react';

import { Skeleton } from '@shared/ui/Skeleton';
import { HStack, VStack } from '@shared/ui/Stack';

export const CommentListSkeleton: FC = () => {
  return (
    <VStack gap="32" fullWidth>
      <HStack fullWidth gap="32">
        <Skeleton width={32} height={32} borderRadius="50%" />
        <Skeleton width="100%" height={50} />
      </HStack>
      <HStack fullWidth gap="32">
        <Skeleton width={32} height={32} borderRadius="50%" />
        <Skeleton width="100%" height={50} />
      </HStack>
      <HStack fullWidth gap="32">
        <Skeleton width={32} height={32} borderRadius="50%" />
        <Skeleton width="100%" height={50} />
      </HStack>
      <HStack fullWidth gap="32">
        <Skeleton width={32} height={32} borderRadius="50%" />
        <Skeleton width="100%" height={50} />
      </HStack>
    </VStack>
  );
};
