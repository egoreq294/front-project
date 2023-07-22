import React, { FC, memo } from 'react';
import cn from 'classnames';
import styles from './styles.module.scss';

interface LoaderProps {
  className?: string;
}

export const Loader: FC<LoaderProps> = memo(({ className }) => {
  return (
    <div className={cn(styles.Loader, className)}>
      <div />
      <div />
      <div />
      <div />
    </div>
  );
});
