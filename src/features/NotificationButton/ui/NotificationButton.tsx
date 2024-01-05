import React, { FC, useCallback, useState } from 'react';
import { BrowserView, MobileView } from 'react-device-detect';

import { NotificationList } from '@entities/Notification';
import { Drawer } from '@shared/ui/Drawer';
import { IconButton } from '@shared/ui/IconButton';
import { Popover } from '@shared/ui/Popover';

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

  const trigger = <IconButton name="NotificationNew" onClick={onOpenDrawer} />;

  return (
    <div>
      <MobileView>
        {trigger}
        <Drawer isOpen={isOpen} onClose={onCloseDrawer}>
          <NotificationList />
        </Drawer>
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
