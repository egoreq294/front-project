import type { Meta, StoryObj } from '@storybook/react';

import { Caption } from './Caption';

const meta: Meta<typeof Caption> = {
  title: 'shared/Caption',
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

export const Accent: Story = {
  args: {
    variant: 'Accent',
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
