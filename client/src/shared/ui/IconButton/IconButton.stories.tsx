import type { Meta, StoryObj } from '@storybook/react';

import { IconButton } from './IconButton';

const meta: Meta<typeof IconButton> = {
  title: 'shared/IconButton',
  component: IconButton,
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof IconButton>;

export const Primary: Story = {
  args: {
    name: 'AvatarNew',
  },
};

export const PrimaryDisabled: Story = {
  args: {
    name: 'AvatarNew',
    disabled: true,
  },
};
