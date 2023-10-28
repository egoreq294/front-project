import type { Meta, StoryObj } from '@storybook/react';

import { Tabs } from './Tabs';

const meta: Meta<typeof Tabs> = {
  title: 'shared/Tabs',
  component: Tabs,
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Tabs>;

export const Normal: Story = {
  args: {
    tabs: [
      { label: 'tab 1', value: 'tab 1' },
      { label: 'tab 2', value: 'tab 2' },
      { label: 'tab 3', value: 'tab 3' },
    ],
    value: 'tab 2',
    onChange: () => {},
  },
};
