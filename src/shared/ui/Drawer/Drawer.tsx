import cn from 'classnames';
import React, { FC, ReactNode, useCallback, useEffect } from 'react';

import { useAnimationModules } from '@shared/lib/components/AnimationProvider';
import { Overlay } from '../Overlay/Overlay';
import { Portal } from '../Portal/Portal';

import styles from './styles.module.scss';

interface DrawerProps {
  children: ReactNode;
  isOpen: boolean;
  onClose: () => void;
  className?: string;
}

const height = window.innerHeight - 100;

const DrawerContent: FC<DrawerProps> = ({
  className,
  isOpen,
  onClose,
  children,
}) => {
  const { Spring, Gesture } = useAnimationModules();

  const [{ y }, api] = Spring.useSpring(() => ({ y: height }));

  const openDrawer = useCallback(() => {
    api.start({ y: 0, immediate: false });
  }, [api]);

  useEffect(() => {
    if (isOpen) {
      openDrawer();
    }
  }, [isOpen, openDrawer]);

  const close = (velocity = 0): void => {
    api.start({
      y: height,
      immediate: false,
      config: { ...Spring.config.stiff, velocity },
      onResolve: onClose,
    });
  };

  const bind = Gesture.useDrag(
    ({
      last,
      velocity: [, vy],
      direction: [, dy],
      movement: [, my],
      cancel,
    }) => {
      if (my < -70) cancel();

      if (last) {
        if (my > height * 0.5 || (vy > 0.5 && dy > 0)) {
          close();
        } else {
          openDrawer();
        }
      } else {
        api.start({ y: my, immediate: true });
      }
    },
    {
      from: () => [0, y.get()],
      filterTaps: true,
      bounds: { top: 0 },
      rubberband: true,
    },
  );

  const display = y.to((py) => (py < height ? 'block' : 'none'));

  if (!isOpen) {
    return null;
  }

  return (
    <Portal>
      <div className={cn(styles.Drawer, 'app_drawer', className)}>
        <Overlay onClick={close} />
        <Spring.a.div
          className={styles.Sheet}
          style={{ display, bottom: `calc(-100vh + ${height - 100}px)`, y }}
          {...bind()}
        >
          {children}
        </Spring.a.div>
      </div>
    </Portal>
  );
};

export const Drawer: FC<DrawerProps> = (props) => {
  const { isLoaded } = useAnimationModules();

  if (!isLoaded) {
    return null;
  }

  return <DrawerContent {...props} />;
};
