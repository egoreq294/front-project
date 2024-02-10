import { memo } from 'react';
import React from 'react';

import { Skeleton } from '@shared/ui/Skeleton';

export const AppLoaderMobileLayout = memo(() => {
  return <Skeleton width="100%" height="70vh" borderRadius="6px" />;
});
