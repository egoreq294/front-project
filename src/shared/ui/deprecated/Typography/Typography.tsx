import cn from 'classnames';
import React, { FC, memo, ReactNode } from 'react';

import styles from './styles.module.scss';

type TypograptyVariant = 'XS' | 'S' | 'M' | 'L';
type ThemeVariant = 'Primary' | 'Inverted';

interface TypographyProps {
  className?: string;
  children: ReactNode;
  variant?: TypograptyVariant;
  theme?: ThemeVariant;
  testId?: string;
}

/**
 * @deprecated
 */
export const Typography: FC<TypographyProps> = memo(
  ({ className, variant = 'S', children, theme = 'Primary', testId }) => {
    return (
      <p
        className={cn(styles[variant], styles[theme], className)}
        data-testid={testId ? `Typography_${testId}` : undefined}
      >
        {children}
      </p>
    );
  },
);
