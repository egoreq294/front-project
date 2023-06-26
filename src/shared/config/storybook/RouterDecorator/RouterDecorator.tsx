import { StoryFn } from '@storybook/react';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';

export const RouterDecorator = (StoryComponent: StoryFn): JSX.Element => (
  <BrowserRouter>
    <StoryComponent />
  </BrowserRouter>
);
