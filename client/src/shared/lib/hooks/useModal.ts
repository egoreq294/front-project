import { useCallback, useEffect, useRef, useState } from 'react';

type UseModal = (args: {
  onClose: () => void;
  isOpen: boolean;
  withAnimation: boolean;
  animationDelay?: number;
}) => {
  isClosing: boolean;
  isMounted: boolean;
  closeHandler: () => void;
};

export const useModal: UseModal = ({
  animationDelay,
  isOpen,
  onClose,
  withAnimation,
}) => {
  const [isClosing, setIsClosing] = useState<boolean>(false);
  const [isMounted, setIsMounted] = useState<boolean>(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const closeHandler = useCallback((): void => {
    setIsClosing(true);
    timerRef.current = setTimeout(() => {
      onClose();
      setIsClosing(false);
    }, animationDelay);
  }, [onClose, animationDelay]);

  const onKeyDown = useCallback(
    (e: KeyboardEvent): void => {
      if (e.key === 'Escape') {
        if (withAnimation) {
          closeHandler();
          return;
        }

        onClose();
      }
    },
    [closeHandler, onClose, withAnimation],
  );

  useEffect(() => {
    if (isOpen) {
      window.addEventListener('keydown', onKeyDown);
    }

    return () => {
      window.removeEventListener('keydown', onKeyDown);

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

  return {
    isClosing,
    isMounted,
    closeHandler: withAnimation ? closeHandler : onClose,
  };
};
