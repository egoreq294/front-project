import type { Meta, StoryObj } from '@storybook/react';
import { Code } from './Code';

const meta: Meta<typeof Code> = {
  title: 'shared/Code',
  component: Code,
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Code>;

export const Default: Story = {
  args: {
    text:
      "import React, { FC, ReactNode } from 'react';\n" +
      "import cn from 'classnames';\n" +
      "import styles from './styles.module.scss';\n" +
      '\n' +
      'interface CodeProps {\n' +
      '  className?: string;\n' +
      '  children: ReactNode;\n' +
      '}\n' +
      '\n' +
      ' export const Code: FC<CodeProps> = ({ className, children }) => {\n' +
      '   return <code className={cn(styles.Code, className)}>{children}</code>;\n' +
      ' };',
  },
};
