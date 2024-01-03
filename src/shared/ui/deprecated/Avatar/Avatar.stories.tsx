import type { Meta, StoryObj } from '@storybook/react';

import { Avatar } from './Avatar';

const meta: Meta<typeof Avatar> = {
  title: 'shared/deprecated/Avatar',
  component: Avatar,
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Avatar>;

export const Primary: Story = {
  args: {
    size: 200,
    src: 'http://www.lookmi.ru/cartoons/draw-shrek.jpg',
    alt: 'Avatar',
  },
};
