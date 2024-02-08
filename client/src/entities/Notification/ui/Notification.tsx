import cn from 'classnames';
import React, { FC } from 'react';

import { EMPTY_STRING } from '@shared/constants/common';
import { Caption } from '@shared/ui/Caption';
import { Card } from '@shared/ui/Card';
import { IconButton } from '@shared/ui/IconButton';
import { Notification as NotificationType } from '../model/types/notification';

import styles from './styles.module.scss';

interface NotificationProps {
  notification: NotificationType;
  onDeleteNotification: () => void;
  className?: string;
}

export const Notification: FC<NotificationProps> = ({
  notification,
  className,
  onDeleteNotification,
}) => {
  const content = (
    <Card variant="Secondary" className={cn(styles.Notification, className)}>
      <IconButton
        name="Cancel"
        onClick={(e): void => {
          e.stopPropagation();
          onDeleteNotification();
        }}
        className={styles.DeleteButton}
      />
      <Caption
        label={notification.title}
        value={notification.description || EMPTY_STRING}
      />
    </Card>
  );

  if (notification.href) {
    return (
      <a
        className={styles.Link}
        rel="noreferrer noopener"
        target="_blank"
        href={notification.href}
      >
        {content}
      </a>
    );
  }

  return content;
};
