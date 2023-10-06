import React, { FC, ReactNode } from 'react';
import cn from 'classnames';
import styles from './styles.module.scss';

type FlexJusify = 'start' | 'center' | 'end' | 'spaceBetween';
type FlexAlign = 'start' | 'center' | 'end';
type FlexDiraction = 'column' | 'row';
type FlexGap = '4' | '8' | '16' | '32';

export interface FlexProps {
  className?: string;
  children: ReactNode;
  justify?: FlexJusify;
  align?: FlexAlign;
  gap?: FlexGap;
  direction?: FlexDiraction;
  fullWidth?: boolean;
}

const JUSTIFY_MAP: Record<FlexJusify, string> = {
  start: styles.JustifyStart,
  center: styles.JustifyCenter,
  end: styles.JustifyEnd,
  spaceBetween: styles.JustifySpaceBetween,
};

const ALIGN_MAP: Record<FlexAlign, string> = {
  start: styles.AlignStart,
  end: styles.AlignEnd,
  center: styles.AlignCenter,
};

const DIRECTION_MAP: Record<FlexDiraction, string> = {
  row: styles.DirectionRow,
  column: styles.DirectionColumn,
};

const GAP_MAP: Record<FlexGap, string> = {
  4: styles.Gap4,
  8: styles.Gap8,
  16: styles.Gap16,
  32: styles.Gap32,
};

export const Flex: FC<FlexProps> = ({
  className,
  children,
  justify = 'start',
  align = 'center',
  direction = 'row',
  fullWidth,
  gap,
}) => {
  return (
    <div
      className={cn(
        styles.Flex,
        JUSTIFY_MAP[justify],
        ALIGN_MAP[align],
        DIRECTION_MAP[direction],
        gap && GAP_MAP[gap],
        { [styles.FullWidth]: fullWidth },
        className,
      )}
    >
      {children}
    </div>
  );
};
