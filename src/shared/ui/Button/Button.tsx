import cn from 'classnames';
import React, { ButtonHTMLAttributes, FC, ReactNode } from 'react';

import styles from './styles.module.scss';

type ButtonVariant =
  | 'Primary'
  | 'PrimaryInverted'
  | 'Secondary'
  | 'SecondaryInverted'
  | 'Ghost'
  | 'GhostInverted'
  | 'Danger';

type Size = 'S' | 'M' | 'L';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children: ReactNode;
  size?: Size;
  variant?: ButtonVariant;
  disabled?: boolean;
  testId?: string;
}

export const Button: FC<ButtonProps> = ({
  className,
  variant = 'Primary',
  size = 'S',
  children,
  disabled,
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
      {
        [styles.Disabled]: disabled,
      },
      className,
    )}
    disabled={disabled}
    {...props}
  >
    {children}
  </button>
);
