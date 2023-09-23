import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from '@shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { AppLink } from './AppLink';
import { Theme } from '@app/providers';

const meta: Meta<typeof AppLink> = {
  title: 'shared/AppLink',
  component: AppLink,
  argTypes: {},
  args: {
    to: '/',
  },
};

export default meta;
type Story = StoryObj<typeof AppLink>;

export const Primary: Story = {
  args: {
    children: 'Text',
    theme: 'Primary',
  },
};

export const Inverted: Story = {
  args: {
    children: 'Text',
    theme: 'Inverted',
  },
};

export const PrimaryDark: Story = {
  args: {
    children: 'Text',
    theme: 'Primary',
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const InvertedDark: Story = {
  args: {
    children: 'Text',
    theme: 'Inverted',
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};
