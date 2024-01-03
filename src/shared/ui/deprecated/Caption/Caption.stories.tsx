import type { Meta, StoryObj } from '@storybook/react';

import { ThemeDecorator } from '@shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@shared/lib/constants/theme';
import { Caption } from './Caption';

const meta: Meta<typeof Caption> = {
  title: 'shared/deprecated/Caption',
  component: Caption,
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Caption>;

export const SizeXS: Story = {
  args: {
    size: 'XS',
    label: 'Label',
    value: 'Value',
  },
};

export const SizeS: Story = {
  args: {
    size: 'S',
    label: 'Label',
    value: 'Value',
  },
};

export const SizeM: Story = {
  args: {
    size: 'M',
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
