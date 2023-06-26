import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from '@shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Button, ThemeButton } from './Button';
import { Theme } from '@app/providers';

const meta: Meta<typeof Button> = {
  title: 'shared/Button',
  component: Button,
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    children: 'Button',
  },
};

export const Clear: Story = {
  args: {
    theme: ThemeButton.CLEAR,
    children: 'Button',
  },
};

export const Outline: Story = {
  args: {
    theme: ThemeButton.OUTLINE,
    children: 'Button',
  },
};

export const OutlineDark: Story = {
  args: {
    theme: ThemeButton.OUTLINE,
    children: 'Button',
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};
