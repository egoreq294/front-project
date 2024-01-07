import { useCallback, useState } from 'react';

interface UseHoverBind {
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

type UseHoverResult = [isHover: boolean, binds: UseHoverBind];

export const useHover = (): UseHoverResult => {
  const [isHover, setIsHover] = useState<boolean>(false);

  const onMouseEnter = useCallback(() => {
    setIsHover(true);
  }, [setIsHover]);

  const onMouseLeave = useCallback(() => {
    setIsHover(false);
  }, [setIsHover]);

  return [isHover, { onMouseEnter, onMouseLeave }];
};
