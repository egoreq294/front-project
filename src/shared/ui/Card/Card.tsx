import cn from 'classnames';
import React, { FC, HTMLAttributes, ReactNode } from 'react';

import styles from './styles.module.scss';

type CardVariant = 'Primary' | 'Secondary';
type CardPadding = '0' | '8' | '16' | '24';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  children: ReactNode;
  variant?: CardVariant;
  fullWidth?: boolean;
  padding?: CardPadding;
}

const PADDING_MAP: Record<CardPadding, string> = {
  0: styles.Gap0,
  8: styles.Gap8,
  16: styles.Gap16,
  24: styles.Gap24,
};

export const Card: FC<CardProps> = ({
  className,
  children,
  variant = 'Primary',
  fullWidth,
  padding = '8',
  ...props
}) => {
  return (
    <div
      className={cn(
        styles.Card,
        styles[variant],
        PADDING_MAP[padding],
        {
          [styles.FullWidth]: fullWidth,
        },
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
};
