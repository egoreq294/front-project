import React, {
  FC,
  ReactNode,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import cn from 'classnames';
import styles from './styles.module.scss';
import { Portal } from '../Portal/Portal';
import { useTheme } from '@app/providers';

interface ModalProps {
  children: ReactNode;
  className?: string;
  isOpen?: boolean;
  onClose: () => void;
}

const ANIMATION_DELAY = 200;

export const Modal: FC<ModalProps> = ({
  className,
  isOpen,
  onClose,
  children,
}) => {
  const { theme } = useTheme();

  const [isClosing, setIsClosing] = useState<boolean>(false);
  const timerRef = useRef<ReturnType<typeof setTimeout>>();

  const onContentClick = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
  ): void => {
    e.stopPropagation();
  };

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
    };
  }, [isOpen, onKeyDown, closeHandler]);

  useEffect(() => {
    return () => {
      clearTimeout(timerRef.current);
    };
  }, []);

  return (
    <Portal>
      <div
        className={cn(
          styles.Modal,
          { [styles.Opened]: isOpen, [styles.IsClosing]: isClosing },
          theme,
          className,
        )}
      >
        <div className={styles.Overlay} onClick={closeHandler}>
          <div className={styles.Content} onClick={onContentClick}>
            {children}
          </div>
        </div>
      </div>
    </Portal>
  );
};
