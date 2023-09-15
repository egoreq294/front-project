import type { Meta, StoryObj } from '@storybook/react';
import { Card } from './Card';
import { Caption } from '../Caption/Caption';
import React from 'react';

const meta: Meta<typeof Card> = {
  title: 'shared/Card',
  component: Card,
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Primary: Story = {
  args: {
    children: <Caption value="Some content here" />,
  },
};

export const Secondary: Story = {
  args: {
    variant: 'Secondary',
    children: <Caption value="Some content here" />,
  },
};
