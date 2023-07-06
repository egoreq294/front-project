import type { Meta, StoryObj } from '@storybook/react';
import { Caption } from './Caption';
import { ThemeDecorator } from '@shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@app/providers';

const meta: Meta<typeof Caption> = {
  title: 'shared/Caption',
  component: Caption,
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Caption>;

export const Default: Story = {
  args: {
    label: 'Label',
    value: 'Value',
  },
};

export const Error: Story = {
  args: {
    variant: 'Error',
    label: 'Label',
    value: 'Value',
  },
};

export const OnlyLabel: Story = {
  args: {
    label: 'Label',
  },
};

export const OnlyValue: Story = {
  args: {
    value: 'Value',
  },
};

export const DefaultDark: Story = {
  args: {
    label: 'Label',
    value: 'Value',
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const OnlyLabelDark: Story = {
  args: {
    label: 'Label',
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const OnlyValueDark: Story = {
  args: {
    value: 'Value',
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};
