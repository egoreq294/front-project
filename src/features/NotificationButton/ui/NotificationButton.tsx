import React, { FC, useCallback, useState } from 'react';
import { BrowserView, MobileView } from 'react-device-detect';

import { NotificationList } from '@entities/Notification';
import { Button } from '@shared/ui/deprecated/Button';
import { Drawer } from '@shared/ui/deprecated/Drawer';
import { Popover } from '@shared/ui/deprecated/Popover';
import { Icon } from '@shared/ui/Icon';

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
      <Icon name="Notification" />
    </Button>
  );

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
