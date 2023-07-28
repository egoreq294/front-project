import type { Meta, StoryObj } from '@storybook/react';
import { Select } from './Select';

const meta: Meta<typeof Select> = {
  title: 'shared/Select',
  component: Select,
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Select>;

export const Primary: Story = {
  args: {
    label: 'Select',
    options: [
      { label: 'Яблоко', value: 'apple' },
      { label: 'Апельсин', value: 'orange' },
      { label: 'Арбуз', value: 'watermelon' },
    ],
  },
};
