import React, { FC, useCallback, useState } from 'react';

import { NotificationList } from '@entities/Notification';
import { useMediaQuery } from '@shared/lib/hooks/useMediaQuery';
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

  const { isDesktop } = useMediaQuery();

  const onOpenDrawer = useCallback(() => {
    setIsOpen(true);
  }, [setIsOpen]);

  const onCloseDrawer = useCallback(() => {
    setIsOpen(false);
  }, [setIsOpen]);

  const trigger = (
    <IconButton
      name="NotificationNew"
      onClick={onOpenDrawer}
      className={styles.TriggerButton}
    />
  );

  return (
    <div>
      {isDesktop ? (
        <Popover
          className={className}
          direction="bottom-left"
          trigger={trigger}
        >
          <NotificationList className={styles.Notifications} />
        </Popover>
      ) : (
        <>
          {trigger}
          <Drawer
            isOpen={isOpen}
            onClose={onCloseDrawer}
            size="80vh"
            direction="bottom"
            withCloseButton={false}
          >
            <NotificationList />
          </Drawer>
        </>
      )}
    </div>
  );
};
