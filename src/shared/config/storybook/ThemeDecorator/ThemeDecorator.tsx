import React from 'react';
import { StoryFn } from '@storybook/react';
import { Theme } from '@app/providers/ThemeProvider';

export const ThemeDecorator =
  (theme: Theme): ((StoryComponent: StoryFn) => JSX.Element) =>
  // eslint-disable-next-line react/display-name
  (StoryComponent: StoryFn): JSX.Element =>
    (
      <div className={theme}>
        <StoryComponent />
      </div>
    );
