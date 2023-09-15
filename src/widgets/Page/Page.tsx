import React, {
  FC,
  MutableRefObject,
  ReactNode,
  UIEvent,
  useEffect,
  useRef,
} from 'react';
import cn from 'classnames';
import styles from './styles.module.scss';
import { useInfiniteScroll } from '@shared/lib/hooks/useInfiniteScroll';
import { useAppDispatch } from '@shared/lib/hooks/useAppDispatch';
import { getScrollByPath, scrollActions } from '@features/Scroll';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { StateSchema } from '@app/providers/StorePovider';
import { useThrottle } from '@shared/lib/hooks/useThrottle';

interface PageProps {
  className?: string;
  children: ReactNode;
  onScrollEnd?: () => void;
}

export const Page: FC<PageProps> = ({ className, children, onScrollEnd }) => {
  const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>;
  const triggerRef = useRef() as MutableRefObject<HTMLDivElement>;

  const dispatch = useAppDispatch();
  const { pathname } = useLocation();

  const scrollPosition = useSelector((state: StateSchema) =>
    getScrollByPath(state, pathname),
  );

  useInfiniteScroll({ triggerRef, wrapperRef, callback: onScrollEnd });

  const onScroll = useThrottle((e: UIEvent<HTMLDivElement>): void => {
    dispatch(
      scrollActions.setScrollPosition({
        position: e.currentTarget.scrollTop,
        path: pathname,
      }),
    );
  }, 500);

  useEffect(() => {
    wrapperRef.current.scrollTop = scrollPosition;
  }, []);

  return (
    <section
      ref={wrapperRef}
      className={cn(styles.Page, className)}
      onScroll={onScroll}
    >
      {children}
      {!!onScrollEnd && <div className={styles.Trigger} ref={triggerRef} />}
    </section>
  );
};
