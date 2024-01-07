import React, { FC } from 'react';

import { IconButton } from '@shared/ui/IconButton';

interface ScrollToTopButtonProps {
  className?: string;
}

export const ScrollToTopButton: FC<ScrollToTopButtonProps> = ({
  className,
}) => {
  const onClick = (): void => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <IconButton
      name="ArrowUp"
      width={32}
      height={32}
      onClick={onClick}
      className={className}
    />
  );
};
