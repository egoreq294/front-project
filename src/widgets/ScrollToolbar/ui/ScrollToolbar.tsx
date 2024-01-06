import cn from 'classnames';
import React, { FC, useEffect, useState } from 'react';

import { ScrollToTopButton } from '@features/ScrollToTopButton';
import { VStack } from '@shared/ui/Stack';

import styles from './styles.module.scss';

interface ScrollToolbarProps {
  className?: string;
}

export const ScrollToolbar: FC<ScrollToolbarProps> = ({ className }) => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = (): void => {
    const scrollPosition = document.documentElement.scrollTop;

    if (scrollPosition !== 0) {
      setVisible(true);
      return;
    }

    setVisible(false);
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisible);
    return () => window.removeEventListener('scroll', toggleVisible);
  });

  if (!visible) {
    return null;
  }

  return (
    <VStack
      align="center"
      justify="center"
      fullWidth
      className={cn(styles.ScrollToolbar, className)}
    >
      <ScrollToTopButton />
    </VStack>
  );
};
