import React, { FC, memo } from 'react';
import cn from 'classnames';
import styles from './styles.module.scss';

type CaptionVariant = 'Default' | 'Error';
type CaptionTextAlign = 'Right' | 'Left' | 'Center';
type CaptionSize = 'S' | 'M';

interface CaptionProps {
  className?: string;
  label?: string;
  value?: string;
  variant?: CaptionVariant;
  align?: CaptionTextAlign;
  size?: CaptionSize;
}

export const Caption: FC<CaptionProps> = memo(
  ({
    className,
    label,
    value,
    variant = 'Default',
    align = 'Left',
    size = 'S',
  }) => {
    return (
      <div
        className={cn(
          styles.Caption,
          styles[variant],
          styles[align],
          styles[size],
          className,
        )}
      >
        {label && <p className={styles.Label}>{label}</p>}
        {value && <p className={styles.Value}>{value}</p>}
      </div>
    );
  },
);
