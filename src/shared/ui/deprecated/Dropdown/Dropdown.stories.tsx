/* eslint-disable i18next/no-literal-string */
import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import { Button } from '../Button/Button';
import { Dropdown } from './Dropdown';

const meta: Meta<typeof Dropdown> = {
  title: 'shared/deprecated/Dropdown',
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
