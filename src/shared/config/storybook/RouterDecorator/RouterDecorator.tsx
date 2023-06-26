import { Story } from '@storybook/react';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';

export const RouterDecorator = (StoryComponent: Story): JSX.Element => (
  <BrowserRouter>
    <StoryComponent />
  </BrowserRouter>
);
