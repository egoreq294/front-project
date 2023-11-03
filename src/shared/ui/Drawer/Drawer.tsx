import cn from 'classnames';
import React, { FC, ReactNode } from 'react';

import { useModal } from '@shared/lib/hooks/useModal';
import { Overlay } from '../Overlay/Overlay';
import { Portal } from '../Portal/Portal';

import styles from './styles.module.scss';

interface DrawerProps {
  children: ReactNode;
  isOpen: boolean;
  onClose: () => void;
  className?: string;
  lazy?: boolean;
}

export const Drawer: FC<DrawerProps> = ({
  className,
  isOpen,
  onClose,
  children,
  lazy,
}) => {
  const { isClosing, isMounted, closeHandler } = useModal({
    isOpen,
    onClose,
    animationDelay: 200,
  });

  if (lazy && !isMounted) {
    return null;
  }

  return (
    <Portal>
      <div
        className={cn(
          styles.Drawer,
          { [styles.Opened]: isOpen, [styles.IsClosing]: isClosing },
          className,
        )}
      >
        <Overlay onClick={closeHandler} />
        <div className={styles.Content}>{children}</div>
      </div>
    </Portal>
  );
};
