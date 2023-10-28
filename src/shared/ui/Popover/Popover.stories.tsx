/* eslint-disable i18next/no-literal-string */
import type { Meta, StoryObj } from '@storybook/react';
import { Popover } from './Popover';
import { Button } from '../Button/Button';
import React from 'react';

const meta: Meta<typeof Popover> = {
  title: 'shared/Popover',
  component: Popover,
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Popover>;

export const Default: Story = {
  args: {
    trigger: <Button>Open</Button>,
    children: <span>Lorem Ipsum...</span>,
  },
};
