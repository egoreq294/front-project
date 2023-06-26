import React from 'react';
import { Story } from '@storybook/react';
import { Theme } from '@app/providers/ThemeProvider';

export const ThemeDecorator =
  (theme: Theme): ((StoryComponent: Story) => JSX.Element) =>
  // eslint-disable-next-line react/display-name
  (StoryComponent: Story): JSX.Element =>
    (
      <div className={theme}>
        <StoryComponent />
      </div>
    );
