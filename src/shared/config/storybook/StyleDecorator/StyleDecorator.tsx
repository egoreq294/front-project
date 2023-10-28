import { StoryFn } from '@storybook/react';
import React from 'react';

import '@app/styles/index.scss';

export const StyleDecorator = (StoryComponent: StoryFn): JSX.Element => (
  <div
    style={{
      background: '#dedbd5',
      height: '90vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}
  >
    <StoryComponent />
  </div>
);
