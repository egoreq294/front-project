import cn from 'classnames';
import React, {
  FC,
  ReactNode,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';

import { Overlay } from '../Overlay/Overlay';
import { Portal } from '../Portal/Portal';

import styles from './styles.module.scss';

interface ModalProps {
  children: ReactNode;
  className?: string;
  isOpen?: boolean;
  onClose: () => void;
  lazy?: boolean;
}

const ANIMATION_DELAY = 200;

export const Modal: FC<ModalProps> = ({
  className,
  isOpen,
  onClose,
  lazy,
  children,
}) => {
  const [isClosing, setIsClosing] = useState<boolean>(false);
  const [isMounted, setIsMounted] = useState<boolean>(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const closeHandler = useCallback((): void => {
    setIsClosing(true);
    timerRef.current = setTimeout(() => {
      onClose();
      setIsClosing(false);
    }, ANIMATION_DELAY);
  }, [onClose]);

  const onKeyDown = useCallback(
    (e: KeyboardEvent): void => {
      if (e.key === 'Escape') {
        closeHandler();
      }
    },
    [closeHandler],
  );

  useEffect(() => {
    if (isOpen) {
      window.addEventListener('keydown', onKeyDown);
    }

    return () => {
      window.removeEventListener('keydown', closeHandler);

      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, [isOpen, onKeyDown, closeHandler]);

  useEffect(() => {
    if (isOpen) {
      setIsMounted(true);
    }
  }, [isOpen]);

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
      >
        <Overlay onClick={closeHandler} />
        <div className={styles.Content}>{children}</div>
      </div>
    </Portal>
  );
};
