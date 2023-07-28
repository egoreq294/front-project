import '@app/styles/index.scss';
import { StoryFn } from '@storybook/react';
import React from 'react';

export const StyleDecorator = (StoryComponent: StoryFn): JSX.Element => (
  <div
    style={{
      background: 'gray',
      height: '90vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}
  >
    <StoryComponent />
  </div>
);
