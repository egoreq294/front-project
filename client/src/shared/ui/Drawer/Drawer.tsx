import cn from 'classnames';
import React, { FC, ReactNode } from 'react';

import { useDrawer } from '@shared/lib/hooks/useDrawer';
import { IconButton } from '../IconButton';
import { Overlay } from '../Overlay';
import { Portal } from '../Portal';

import styles from './styles.module.scss';

interface DrawerProps {
  children: ReactNode;
  isOpen: boolean;
  onClose: () => void;
  className?: string;
  testId?: string;
  size?: string | number;
  direction?: 'left' | 'right' | 'bottom';
  withCloseButton?: boolean;
}

export const Drawer: FC<DrawerProps> = ({
  className,
  isOpen,
  onClose,
  children,
  testId,
  size = '80vh',
  direction = 'bottom',
  withCloseButton = true,
}) => {
  const { isClosing, isOpening, closeHandler } = useDrawer({
    isOpen,
    onClose,
    animationDelay: 200,
  });

  const animationOffset = typeof size === 'number' ? -size : `-${size}`;

  if (!isOpen) {
    return null;
  }

  return (
    <Portal>
      <div
        className={cn(styles.Drawer, className)}
        data-testid={testId ? `Drawer_${testId}` : undefined}
      >
        <Overlay onClick={closeHandler} />
        <div
          className={styles.Wrapper}
          style={{
            ...(direction === 'bottom' && {
              bottom: isClosing || isOpening ? animationOffset : 0,
              left: 0,
              height: size,
              width: '100vw',
            }),
            ...(direction === 'right' && {
              right: isClosing || isOpening ? animationOffset : 0,
              top: 0,
              height: window.innerHeight,
              width: size,
            }),
            ...(direction === 'left' && {
              left: isClosing || isOpening ? animationOffset : 0,
              top: 0,
              height: window.innerHeight,
              width: size,
            }),
          }}
        >
          <div
            className={styles.Content}
            style={{
              ...(direction === 'bottom' && {
                height: size,
              }),
              ...((direction === 'right' || direction === 'left') && {
                height: window.innerHeight,
              }),
            }}
          >
            <>
              {children}
              {withCloseButton && (
                <IconButton
                  name="Cancel"
                  onClick={closeHandler}
                  className={styles.CloseButton}
                />
              )}
            </>
          </div>
        </div>
      </div>
    </Portal>
  );
};
