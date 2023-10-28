import React, { FC } from 'react';
import cn from 'classnames';
import styles from './styles.module.scss';
import { Notification as NotificationType } from '../model/types/notification';
import { Card } from '@shared/ui/Card/Card';
import { Caption } from '@shared/ui/Caption/Caption';

interface NotificationProps {
  notification: NotificationType;
  className?: string;
}

export const Notification: FC<NotificationProps> = ({
  notification,
  className,
}) => {
  const content = (
    <Card variant="Secondary" className={cn(styles.Notification, className)}>
      <Caption label={notification.title} value={notification.description} />
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
