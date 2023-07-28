import React, { CSSProperties, FC, useMemo } from 'react';
import cn from 'classnames';
import styles from './styles.module.scss';

interface AvatarProps {
  src?: string;
  alt?: string;
  className?: string;
  size?: number;
}

export const Avatar: FC<AvatarProps> = ({ src, alt, size, className }) => {
  const style = useMemo<CSSProperties>(
    () => ({ width: size, height: size }),
    [size],
  );

  return (
    <img
      src={src}
      alt={alt}
      style={style}
      className={cn(styles.Avatar, className)}
    />
  );
};
