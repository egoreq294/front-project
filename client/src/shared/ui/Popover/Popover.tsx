import { Popover as PopoverImpl, Transition } from '@headlessui/react';
import cn from 'classnames';
import React, { FC, ReactElement, ReactNode, useState } from 'react';

import { DropdownDirection } from '@shared/types/ui';

import styles from './styles.module.scss';

interface PopoverProps {
  className?: string;
  trigger: ReactNode;
  children: ReactNode;
  direction?: DropdownDirection;
  event?: 'click' | 'hover';
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
  event = 'click',
}) => {
  const [isHover, setIsHover] = useState(false);

  const onMouseEnter = (): void => setIsHover(true);
  const onMouseLeave = (): void => setIsHover(false);

  return (
    <PopoverImpl className={cn(styles.Popover, className)}>
      {({ open }): ReactElement => (
        <>
          <PopoverImpl.Button
            as="div"
            className={styles.TriggerButton}
            onMouseEnter={event === 'hover' ? onMouseEnter : undefined}
            onMouseLeave={event === 'hover' ? onMouseLeave : undefined}
          >
            {trigger}
          </PopoverImpl.Button>

          <Transition show={event === 'hover' ? isHover : open}>
            <PopoverImpl.Panel
              className={cn(styles.Panel, DROPDOWN_DIRECTION_MAP[direction])}
            >
              {children}
            </PopoverImpl.Panel>
          </Transition>
        </>
      )}
    </PopoverImpl>
  );
};
