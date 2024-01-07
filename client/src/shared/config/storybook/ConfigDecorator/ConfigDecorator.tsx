import { StoryFn } from '@storybook/react';
import React from 'react';

import { INITIAL_CONFIG } from '@shared/lib/constants/config';
import { ConfigContext } from '@shared/lib/contexts/ConfigContext';

export const ConfigDecorator = (StoryComponent: StoryFn): JSX.Element => (
  <ConfigContext.Provider value={INITIAL_CONFIG}>
    <StoryComponent />
  </ConfigContext.Provider>
);
