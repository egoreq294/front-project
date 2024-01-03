import { Popover as PopoverImpl } from '@headlessui/react';
import cn from 'classnames';
import React, { FC, ReactNode } from 'react';

import { DropdownDirection } from '@shared/types/ui';

import styles from './styles.module.scss';

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

/**
 * @deprecated
 */
export const Popover: FC<PopoverProps> = ({
  className,
  trigger,
  direction = 'bottom-right',
  children,
}) => {
  return (
    <PopoverImpl className={cn(styles.Popover, className)}>
      <PopoverImpl.Button as="div" className={styles.TriggerButton}>
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
