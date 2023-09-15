import { MutableRefObject, useCallback, useRef } from 'react';

type UseDebounceFunc = (
  callback: (...args: any[]) => void,
  delay: number,
) => () => void;

export const useDebounce: UseDebounceFunc = (callback, delay) => {
  const timer = useRef() as MutableRefObject<any>;

  return useCallback(
    (...args: any[]) => {
      if (timer.current) {
        clearTimeout(timer.current);
      }

      timer.current = setTimeout(() => {
        callback(...args);
      }, delay);
    },
    [callback, delay],
  );
};
