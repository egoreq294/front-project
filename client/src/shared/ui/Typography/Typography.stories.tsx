import type { Meta, StoryObj } from '@storybook/react';

import { Typography } from './Typography';

const meta: Meta<typeof Typography> = {
  title: 'shared/Typography',
  component: Typography,
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Typography>;

export const XS: Story = {
  args: {
    children: 'lorem ipsum',
    variant: 'XS',
  },
};

export const S: Story = {
  args: {
    children: 'lorem ipsum',
    variant: 'S',
  },
};

export const M: Story = {
  args: {
    children: 'lorem ipsum',
    variant: 'M',
  },
};

export const L: Story = {
  args: {
    children: 'lorem ipsum',
    variant: 'L',
  },
};
