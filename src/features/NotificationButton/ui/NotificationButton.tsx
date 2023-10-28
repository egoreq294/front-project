import React, { FC } from 'react';
import styles from './styles.module.scss';
import { Popover } from '@shared/ui/Popover/Popover';
import { Button } from '@shared/ui/Button/Button';
import NotificationIcon from '@shared/assets/icons/notification.svg';
import { NotificationList } from '@entities/Notification';

interface NotificationButtonProps {
  className?: string;
}

export const NotificationButton: FC<NotificationButtonProps> = ({
  className,
}) => {
  return (
    <Popover
      className={className}
      direction="bottom-left"
      trigger={
        <Button variant="GhostInverted">
          <NotificationIcon />
        </Button>
      }
    >
      <NotificationList className={styles.Notifications} />
    </Popover>
  );
};
