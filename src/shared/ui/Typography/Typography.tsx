import React, { FC, ReactNode, memo } from 'react';
import cn from 'classnames';
import styles from './styles.module.scss';

type TypograptyVariant = 'S' | 'M' | 'L';

interface TypographyProps {
  className?: string;
  children: ReactNode;
  variant?: TypograptyVariant;
}

export const Typography: FC<TypographyProps> = memo(
  ({ className, variant = 'S', children }) => {
    return <p className={cn(styles[variant], className)}>{children}</p>;
  },
);
