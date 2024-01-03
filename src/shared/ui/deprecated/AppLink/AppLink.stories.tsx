import type { Meta, StoryObj } from '@storybook/react';

import { ThemeDecorator } from '@shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@shared/lib/constants/theme';
import { AppLink } from './AppLink';

const meta: Meta<typeof AppLink> = {
  title: 'shared/deprecated/AppLink',
  component: AppLink,
  argTypes: {},
  args: {
    to: '/',
  },
};

export default meta;
type Story = StoryObj<typeof AppLink>;

export const Primary: Story = {
  args: {
    children: 'Text',
    theme: 'Primary',
  },
};

export const Inverted: Story = {
  args: {
    children: 'Text',
    theme: 'Inverted',
  },
};

export const PrimaryDark: Story = {
  args: {
    children: 'Text',
    theme: 'Primary',
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const InvertedDark: Story = {
  args: {
    children: 'Text',
    theme: 'Inverted',
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};
