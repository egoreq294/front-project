import React, { FC, MutableRefObject, ReactNode, useRef } from 'react';
import cn from 'classnames';
import styles from './styles.module.scss';
import { useInfiniteScroll } from '@shared/lib/hooks/useInfiniteScroll';

interface PageProps {
  className?: string;
  children: ReactNode;
  onScrollEnd?: () => void;
}

export const Page: FC<PageProps> = ({ className, children, onScrollEnd }) => {
  const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>;
  const triggerRef = useRef() as MutableRefObject<HTMLDivElement>;

  useInfiniteScroll({ triggerRef, wrapperRef, callback: onScrollEnd });

  return (
    <section ref={wrapperRef} className={cn(styles.Page, className)}>
      {children}
      <div ref={triggerRef} />
    </section>
  );
};
