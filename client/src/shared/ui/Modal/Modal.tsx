import cn from 'classnames';
import React, { FC, ReactNode } from 'react';

import { useModal } from '@shared/lib/hooks/useModal';
import { Overlay } from '../Overlay';
import { Portal } from '../Portal';

import styles from './styles.module.scss';

interface ModalProps {
  children: ReactNode;
  isOpen: boolean;
  onClose: () => void;
  className?: string;
  lazy?: boolean;
  testId?: string;
  withAnimation?: boolean;
}

export const Modal: FC<ModalProps> = ({
  className,
  isOpen,
  onClose,
  lazy,
  children,
  testId,
  withAnimation = true,
}) => {
  const { isClosing, isMounted, closeHandler } = useModal({
    isOpen,
    onClose,
    animationDelay: 200,
    withAnimation,
  });

  if (lazy && !isMounted) {
    return null;
  }

  return (
    <Portal>
      <div
        className={cn(
          styles.Modal,
          { [styles.Opened]: isOpen, [styles.IsClosing]: isClosing },
          className,
        )}
        data-testid={testId ? `Modal_${testId}` : undefined}
      >
        <Overlay onClick={closeHandler} />
        <div className={styles.Content}>{children}</div>
      </div>
    </Portal>
  );
};
