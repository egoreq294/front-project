import type { Preview } from '@storybook/react';

import { ConfigDecorator } from '../../src/shared/config/storybook/ConfigDecorator/ConfigDecorator';
import { RouterDecorator } from '../../src/shared/config/storybook/RouterDecorator/RouterDecorator';
import { StoreDecorator } from '../../src/shared/config/storybook/StoreDecorator/StoreDecorator';
import { StyleDecorator } from '../../src/shared/config/storybook/StyleDecorator/StyleDecorator';
import { ThemeDecorator } from '../../src/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '../../src/shared/lib/constants/theme';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    themes: {
      default: 'light',
      list: [
        { name: 'light', class: Theme.LIGHT, color: '#ffffff' },
        { name: 'dark', class: Theme.DARK, color: '#000000' },
        { name: 'orange', class: Theme.ORANGE, color: '#ffb005' },
      ],
    },
  },
  decorators: [
    StyleDecorator,
    ThemeDecorator(Theme.LIGHT),
    ConfigDecorator,
    RouterDecorator,
    StoreDecorator({}),
  ],
};

export default preview;
