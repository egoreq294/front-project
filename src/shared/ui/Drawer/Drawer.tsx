import cn from 'classnames';
import React, { FC, ReactNode } from 'react';

import { Overlay } from '../Overlay/Overlay';
import { Portal } from '../Portal/Portal';

import styles from './styles.module.scss';

interface DrawerProps {
  className?: string;
  children: ReactNode;
  isOpen: boolean;
  onClose?: () => void;
}

export const Drawer: FC<DrawerProps> = ({
  className,
  isOpen,
  onClose,
  children,
}) => {
  return (
    <Portal>
      <div
        className={cn(styles.Drawer, { [styles.Opened]: isOpen }, className)}
      >
        <Overlay onClick={onClose} />
        <div className={styles.Content}>{children}</div>
      </div>
    </Portal>
  );
};
