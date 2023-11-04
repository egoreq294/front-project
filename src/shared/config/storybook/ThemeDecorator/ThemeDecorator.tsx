import { StoryFn } from '@storybook/react';
import React from 'react';

// eslint-disable-next-line egoreq-plugin/layer-imports
import { ThemeProvider } from '@app/providers';
import { Theme } from '@shared/lib/constants/theme';

export const ThemeDecorator =
  (theme: Theme): ((StoryComponent: StoryFn) => JSX.Element) =>
  // eslint-disable-next-line react/display-name
  (StoryComponent: StoryFn): JSX.Element =>
    (
      <ThemeProvider initialTheme={theme}>
        <div className={theme}>
          <StoryComponent />
        </div>
      </ThemeProvider>
    );
