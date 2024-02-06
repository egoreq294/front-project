import type { Meta, StoryObj } from '@storybook/react';

import { TextArea } from './TextArea';

const meta: Meta<typeof TextArea> = {
  title: 'shared/TextArea',
  component: TextArea,
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof TextArea>;

export const Primary: Story = {
  args: {
    value: 'lorem ipsum',
    placeholder: 'Enter text',
  },
};

export const Disabled: Story = {
  args: {
    value: 'lorem ipsum',
    placeholder: 'Enter text',
    disabled: true,
  },
};
