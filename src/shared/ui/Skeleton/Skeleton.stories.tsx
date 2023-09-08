import type { Meta, StoryObj } from '@storybook/react';
import { Skeleton } from './Skeleton';
import { ThemeDecorator } from '@shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@app/providers';

const meta: Meta<typeof Skeleton> = {
  title: 'shared/Skeleton',
  component: Skeleton,
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Skeleton>;

export const Normal: Story = {
  args: {
    width: '100%',
    height: 200,
  },
};

export const Circle: Story = {
  args: {
    width: 100,
    height: 100,
    borderRadius: '50%',
  },
};

export const NormalDark: Story = {
  args: {
    width: 500,
    height: 200,
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const CircleDark: Story = {
  args: {
    width: 100,
    height: 100,
    borderRadius: '50%',
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};