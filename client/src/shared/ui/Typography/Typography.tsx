import cn from 'classnames';
import React, { FC, memo, ReactNode } from 'react';

import styles from './styles.module.scss';

type TypographyVariant = 'XS' | 'S' | 'M' | 'L';

interface TypographyProps {
  className?: string;
  children: ReactNode;
  variant?: TypographyVariant;
  bold?: boolean;
  testId?: string;
}

export const Typography: FC<TypographyProps> = memo(
  ({ className, variant = 'S', children, testId, bold }) => {
    return (
      <p
        className={cn(
          styles.Typography,
          styles[variant],
          bold && styles.Bold,
          className,
        )}
        data-testid={testId ? `Typography_${testId}` : undefined}
      >
        {children}
      </p>
    );
  },
);
