import React, { ButtonHTMLAttributes, FC, ReactNode } from 'react';
import cn from 'classnames';
import styles from './styles.module.scss';

export enum ThemeButton {
  CLEAR = 'Clear',
  OUTLINE = 'Outline',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children: ReactNode;
  theme?: ThemeButton;
}

export const Button: FC<ButtonProps> = ({
  className,
  theme,
  children,
  ...props
}) => (
  <button
    type="button"
    className={cn(styles.Button, styles[theme], className)}
    {...props}
  >
    {children}
  </button>
);
