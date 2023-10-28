import cn from 'classnames';
import React, { FC, memo } from 'react';

import styles from './styles.module.scss';

type CaptionVariant = 'Default' | 'Error';
type CaptionTextAlign = 'Right' | 'Left' | 'Center';
type CaptionSize = 'XS' | 'S' | 'M';

interface CaptionProps {
  className?: string;
  label?: string;
  value?: string;
  variant?: CaptionVariant;
  align?: CaptionTextAlign;
  size?: CaptionSize;
}

type HeaderTagType = 'h2' | 'h3' | 'h4';

const LABEL_COMPONENT_MAP: Record<CaptionSize, HeaderTagType> = {
  XS: 'h4',
  S: 'h3',
  M: 'h2',
};

export const Caption: FC<CaptionProps> = memo(
  ({
    className,
    label,
    value,
    variant = 'Default',
    align = 'Left',
    size = 'S',
  }) => {
    const HeaderTag = LABEL_COMPONENT_MAP[size];

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
        {label && <HeaderTag className={styles.Label}>{label}</HeaderTag>}
        {value && <p className={styles.Value}>{value}</p>}
      </div>
    );
  },
);
