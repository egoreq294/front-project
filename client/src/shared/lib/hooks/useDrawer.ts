import { useCallback, useEffect, useRef, useState } from 'react';

type UseDrawer = (args: {
  onClose: () => void;
  isOpen: boolean;
  animationDelay?: number;
}) => {
  isClosing: boolean;
  isOpening: boolean;
  closeHandler: () => void;
};

export const useDrawer: UseDrawer = ({ animationDelay, isOpen, onClose }) => {
  const [isClosing, setIsClosing] = useState<boolean>(false);
  const [isOpening, setIsOpening] = useState<boolean>(false);
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
        closeHandler();
      }
    },
    [closeHandler],
  );

  useEffect(() => {
    if (!isOpen) {
      setIsOpening(true);
      return;
    }

    setIsOpening(true);
    timerRef.current = setTimeout(() => {
      setIsOpening(false);
    }, animationDelay);
  }, [isOpen, animationDelay, setIsOpening]);

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

  return {
    isClosing,
    isOpening,
    closeHandler,
  };
};
