import cn from 'classnames';
import React, { FC, ReactElement } from 'react';

import styles from './styles.module.scss';

interface StickyContentLayoutProps {
  className?: string;
  left?: ReactElement;
  content: ReactElement;
  right?: ReactElement;
}

export const StickyContentLayout: FC<StickyContentLayoutProps> = ({
  className,
  left,
  content,
  right,
}) => {
  return (
    <div className={cn(styles.StickyContentLayout, className)}>
      {left && <div className={styles.Left}>{left}</div>}
      <div className={styles.Content}>{content}</div>
      {right && <div className={styles.Right}>{right}</div>}
    </div>
  );
};
