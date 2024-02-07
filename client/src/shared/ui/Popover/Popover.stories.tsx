/* eslint-disable i18next/no-literal-string */
import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import { Button } from '../Button/Button';
import { Popover } from './Popover';

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

export const Hovered: Story = {
  args: {
    trigger: <Button disabled>Open</Button>,
    children: <span>Lorem Ipsum...</span>,
    event: 'hover',
  },
};
