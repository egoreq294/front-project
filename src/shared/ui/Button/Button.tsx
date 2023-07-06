import React, { ButtonHTMLAttributes, FC, ReactNode } from 'react';
import cn from 'classnames';
import styles from './styles.module.scss';

type ButtonVariant =
  | 'Primary'
  | 'PrimaryInverted'
  | 'Secondary'
  | 'SecondaryInverted'
  | 'Ghost'
  | 'GhostInverted';

type Size = 'S' | 'M' | 'L';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children: ReactNode;
  size?: Size;
  variant?: ButtonVariant;
  disabled?: boolean;
}

export const Button: FC<ButtonProps> = ({
  className,
  variant = 'Primary',
  size = 'S',
  children,
  disabled,
  ...props
}) => (
  <button
    type="button"
    className={cn(
      styles.Button,
      styles[variant],
      styles[size],
      { [styles.Disabled]: disabled },
      className,
    )}
    disabled={disabled}
    {...props}
  >
    {children}
  </button>
);
