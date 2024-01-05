import cn from 'classnames';
import React, { FC, memo } from 'react';

import styles from './styles.module.scss';

interface LoaderProps {
  testId?: string;
  className?: string;
}

export const Loader: FC<LoaderProps> = memo(({ className, testId }) => {
  return (
    <div
      data-testid={testId ? `Loader_${testId}` : undefined}
      className={cn(styles.Loader, className)}
    >
      <div />
      <div />
      <div />
      <div />
    </div>
  );
});
