import cn from 'classnames';
import React, { CSSProperties, FC, useMemo } from 'react';

import { AppImage } from '../../AppImage';
import { Icon } from '../../Icon';
import { Skeleton } from '../Skeleton';

import styles from './styles.module.scss';

interface AvatarProps {
  src?: string;
  alt?: string;
  className?: string;
  size?: number;
  fallbackInverted?: boolean;
}

/**
 * @deprecated
 */
export const Avatar: FC<AvatarProps> = ({
  src,
  alt,
  size,
  className,
  fallbackInverted,
}) => {
  const style = useMemo<CSSProperties>(
    () => ({ width: size, height: size }),
    [size],
  );

  return (
    <AppImage
      src={src}
      alt={alt}
      style={style}
      errorFallback={
        <Icon
          className={fallbackInverted ? styles.InvertedIcon : undefined}
          name="Avatar"
          style={style}
        />
      }
      fallback={<Skeleton width={size} height={size} borderRadius="50%" />}
      className={cn(styles.Avatar, className)}
    />
  );
};
