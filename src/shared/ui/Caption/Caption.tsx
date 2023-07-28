import React, { FC, memo } from 'react';
import cn from 'classnames';
import styles from './styles.module.scss';

type CaptionVariant = 'Default' | 'Error';
type CaptionTextAlign = 'Right' | 'Left' | 'Center';

interface CaptionProps {
  className?: string;
  label?: string;
  value?: string;
  variant?: CaptionVariant;
  align?: CaptionTextAlign;
}

export const Caption: FC<CaptionProps> = memo(
  ({ className, label, value, variant = 'Default', align = 'Left' }) => {
    return (
      <div
        className={cn(
          styles.Caption,
          styles[variant],
          styles[align],
          className,
        )}
      >
        {label && <p className={styles.Label}>{label}</p>}
        {value && <p className={styles.Value}>{value}</p>}
      </div>
    );
  },
);
