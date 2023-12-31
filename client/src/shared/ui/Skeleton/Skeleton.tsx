import cn from 'classnames';
import React, { CSSProperties, FC } from 'react';

import styles from './styles.module.scss';

interface SkeletonProps {
  className?: string;
  height?: string | number;
  width?: string | number;
  borderRadius?: string;
}

export const Skeleton: FC<SkeletonProps> = ({
  className,
  height,
  width,
  borderRadius = 6,
}) => {
  const style: CSSProperties = {
    height,
    width,
    borderRadius,
  };
  return <div style={style} className={cn(styles.Skeleton, className)} />;
};
