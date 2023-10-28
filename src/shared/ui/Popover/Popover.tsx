import React, { FC, ReactNode } from 'react';
import cn from 'classnames';
import styles from './styles.module.scss';
import { DropdownDirection } from '@shared/types/ui';
import { Popover as PopoverImpl } from '@headlessui/react';

interface PopoverProps {
  className?: string;
  trigger: ReactNode;
  children: ReactNode;
  direction?: DropdownDirection;
}

const DROPDOWN_DIRECTION_MAP: Record<DropdownDirection, string> = {
  'bottom-right': styles.BottomRight,
  'bottom-left': styles.BottomLeft,
  'top-right': styles.TopRight,
  'top-left': styles.TopLeft,
};

export const Popover: FC<PopoverProps> = ({
  className,
  trigger,
  direction = 'bottom-right',
  children,
}) => {
  return (
    <PopoverImpl className={cn(styles.Popover, className)}>
      <PopoverImpl.Button className={styles.TriggerButton}>
        {trigger}
      </PopoverImpl.Button>

      <PopoverImpl.Panel
        className={cn(styles.Panel, DROPDOWN_DIRECTION_MAP[direction])}
      >
        {children}
      </PopoverImpl.Panel>
    </PopoverImpl>
  );
};
