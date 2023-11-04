import type { Meta, StoryObj } from '@storybook/react';

import { ThemeDecorator } from '@shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@shared/lib/constants/theme';
import { Loader } from './Loader';

const meta: Meta<typeof Loader> = {
  title: 'shared/Loader',
  component: Loader,
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Loader>;

export const Normal: Story = {
  args: {},
};

export const Dark: Story = {
  args: {},
  decorators: [ThemeDecorator(Theme.DARK)],
};
