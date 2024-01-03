import cn from 'classnames';
import React, { FC, HTMLAttributes, ReactNode } from 'react';

import styles from './styles.module.scss';

type CardVariant = 'Primary' | 'Secondary';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  children: ReactNode;
  variant?: CardVariant;
}

/**
 * @deprecated
 */
export const Card: FC<CardProps> = ({
  className,
  children,
  variant = 'Primary',
  ...props
}) => {
  return (
    <div className={cn(styles.Card, styles[variant], className)} {...props}>
      {children}
    </div>
  );
};
