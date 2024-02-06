import cn from 'classnames';
import React, { ButtonHTMLAttributes, FC, ReactNode } from 'react';

import styles from './styles.module.scss';

type ButtonVariant = 'Primary' | 'Ghost' | 'Filled' | 'Danger' | 'Success';

type Size = 'S' | 'M' | 'L';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children: ReactNode;
  size?: Size;
  variant?: ButtonVariant;
  disabled?: boolean;
  fullWidth?: boolean;
  testId?: string;
}

export const Button: FC<ButtonProps> = ({
  className,
  variant = 'Primary',
  size = 'S',
  children,
  disabled,
  fullWidth,
  testId,
  ...props
}) => (
  <button
    type="button"
    data-testid={testId ? `Button_${testId}` : undefined}
    className={cn(
      styles.Button,
      styles[variant],
      styles[size],
      { [styles.FullWidth]: fullWidth },
      className,
    )}
    disabled={disabled}
    {...props}
  >
    {children}
  </button>
);
