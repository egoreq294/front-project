import React, { FC, ReactNode, memo } from 'react';
import cn from 'classnames';
import styles from './styles.module.scss';

type TypograptyVariant = 'XS' | 'S' | 'M' | 'L';
type ThemeVariant = 'Primary' | 'Inverted';

interface TypographyProps {
  className?: string;
  children: ReactNode;
  variant?: TypograptyVariant;
  theme?: ThemeVariant;
}

export const Typography: FC<TypographyProps> = memo(
  ({ className, variant = 'S', children, theme = 'Primary' }) => {
    return (
      <p className={cn(styles[variant], styles[theme], className)}>
        {children}
      </p>
    );
  },
);
