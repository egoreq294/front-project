import type { Meta, StoryObj } from '@storybook/react';

import { ListBox } from './ListBox';

const meta: Meta<typeof ListBox> = {
  title: 'shared/ListBox',
  component: ListBox,
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof ListBox>;

export const Primary: Story = {
  args: {
    defaultValue: 'Выберите значение',
    onChange: () => {},
    direction: 'bottom-right',
    items: [
      { content: 'Яблоко', value: 'apple' },
      { content: 'Апельсин', value: 'orange' },
      { content: 'Арбуз', value: 'watermelon' },
    ],
  },
};
