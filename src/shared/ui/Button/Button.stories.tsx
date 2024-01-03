import type { Meta, StoryObj } from '@storybook/react';

import { Button } from './Button';

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

export const Ghost: Story = {
  args: {
    variant: 'Ghost',
    children: 'Button',
  },
};

export const PrimaryDisabled: Story = {
  args: {
    children: 'Button',
    disabled: true,
  },
};

export const GhostDisabled: Story = {
  args: {
    variant: 'Ghost',
    children: 'Button',
    disabled: true,
  },
};
