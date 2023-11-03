import React, { FC, useCallback, useState } from 'react';
import { BrowserView, MobileView } from 'react-device-detect';

import { NotificationList } from '@entities/Notification';
import NotificationIcon from '@shared/assets/icons/notification.svg';
import { AnimationProvider } from '@shared/lib/components/AnimationProvider';
import { Button } from '@shared/ui/Button/Button';
import { Drawer } from '@shared/ui/Drawer/Drawer';
import { Popover } from '@shared/ui/Popover/Popover';

import styles from './styles.module.scss';

interface NotificationButtonProps {
  className?: string;
}

export const NotificationButton: FC<NotificationButtonProps> = ({
  className,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const onOpenDrawer = useCallback(() => {
    setIsOpen(true);
  }, [setIsOpen]);

  const onCloseDrawer = useCallback(() => {
    setIsOpen(false);
  }, [setIsOpen]);

  const trigger = (
    <Button onClick={onOpenDrawer} variant="GhostInverted">
      <NotificationIcon />
    </Button>
  );

  return (
    <div>
      <MobileView>
        {trigger}
        <AnimationProvider>
          <Drawer isOpen={isOpen} onClose={onCloseDrawer}>
            <NotificationList />
          </Drawer>
        </AnimationProvider>
      </MobileView>

      <BrowserView>
        <Popover
          className={className}
          direction="bottom-left"
          trigger={trigger}
        >
          <NotificationList className={styles.Notifications} />
        </Popover>
      </BrowserView>
    </div>
  );
};
