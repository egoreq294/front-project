/* eslint-disable i18next/no-literal-string */
import type { Meta, StoryObj } from '@storybook/react';
import { Dropdown } from './Dropdown';
import { Button } from '../Button/Button';
import React from 'react';

const meta: Meta<typeof Dropdown> = {
  title: 'shared/Dropdown',
  component: Dropdown,
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Dropdown>;

export const Default: Story = {
  args: {
    trigger: <Button>Open</Button>,
    items: [
      {
        id: '1',
        content: 'first',
      },
      {
        id: '2',
        content: 'second',
      },
      {
        id: '3',
        content: 'third',
      },
    ],
  },
};
