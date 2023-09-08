import { useCallback, useRef } from 'react';

type UseThrottleFunc = (
  callback: (...args: any[]) => void,
  delay: number,
) => () => void;

export const useThrottle: UseThrottleFunc = (callback, delay) => {
  const throttleRef = useRef(false);

  return useCallback(
    (...args: any[]) => {
      if (!throttleRef.current) {
        callback(...args);
        throttleRef.current = true;

        setTimeout(() => {
          throttleRef.current = false;
        }, delay);
      }
    },
    [callback, delay],
  );
};
