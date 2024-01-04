import { MutableRefObject, useEffect } from 'react';

interface UseInfiniteScrollArgs {
  callback?: () => void;
  triggerRef: MutableRefObject<HTMLElement>;
  wrapperRef?: MutableRefObject<HTMLElement>;
}

export const useInfiniteScroll = ({
  callback,
  triggerRef,
  wrapperRef,
}: UseInfiniteScrollArgs): void => {
  useEffect(() => {
    const wrapperElement = wrapperRef?.current;
    const triggerElement = triggerRef.current;

    if (!callback) {
      return;
    }

    const options = {
      root: wrapperElement,
      rootMargin: '0px',
      threshold: 1.0,
    };
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        callback();
      }
    }, options);

    observer.observe(triggerElement);

    return (): void => {
      if (observer) {
        observer.unobserve(triggerElement);
      }
    };
  }, [triggerRef, wrapperRef, callback]);
};
