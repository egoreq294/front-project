import type { Meta, StoryObj } from '@storybook/react';

import { Button } from './Button';

const meta: Meta<typeof Button> = {
  title: 'shared/deprecated/Button',
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

export const PrimaryInverted: Story = {
  args: {
    children: 'Button',
    variant: 'PrimaryInverted',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'Secondary',
    children: 'Button',
  },
};

export const SecondaryInverted: Story = {
  args: {
    variant: 'SecondaryInverted',
    children: 'Button',
  },
};

export const Ghost: Story = {
  args: {
    variant: 'Ghost',
    children: 'Button',
  },
};

export const GhostInverted: Story = {
  args: {
    variant: 'GhostInverted',
    children: 'Button',
  },
};

export const Danger: Story = {
  args: {
    variant: 'Danger',
    children: 'Button',
  },
};

export const PrimaryDisabled: Story = {
  args: {
    children: 'Button',
    disabled: true,
  },
};
