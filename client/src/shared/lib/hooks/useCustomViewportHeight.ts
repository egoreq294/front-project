import { useEffect } from 'react';

const setCustomViewportHeight = (): void => {
  const vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
};

export const useCustomViewportHeight = (): void => {
  useEffect(() => {
    setCustomViewportHeight();

    window.addEventListener('resize', setCustomViewportHeight);
    return () => {
      window.removeEventListener('resize', setCustomViewportHeight);
    };
  }, []);
};
