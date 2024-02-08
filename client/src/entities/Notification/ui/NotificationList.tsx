import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { Card } from '@shared/ui/Card';
import { Skeleton } from '@shared/ui/Skeleton';
import { VStack } from '@shared/ui/Stack';
import { Typography } from '@shared/ui/Typography';
import {
  useDeleteNotification,
  useNotifications,
} from '../api/notificationApi';
import { Notification } from './Notification';

interface NotificationListProps {
  className?: string;
}

export const NotificationList: FC<NotificationListProps> = ({ className }) => {
  const { data, isLoading, refetch } = useNotifications(null, {
    pollingInterval: 5000,
  });
  const [deleteNotification, { isLoading: isDeleteNotificationLoading }] =
    useDeleteNotification();
  const { t } = useTranslation();

  if (isLoading || isDeleteNotificationLoading) {
    return (
      <VStack gap="8" fullWidth className={className}>
        <Skeleton width="100%" borderRadius="8" height="80px" />
        <Skeleton width="100%" borderRadius="8" height="80px" />
        <Skeleton width="100%" borderRadius="8" height="80px" />
      </VStack>
    );
  }

  if (!data?.length) {
    return (
      <Card variant="Secondary" fullWidth>
        <Typography variant="M">{t('empty-notofications')}</Typography>
      </Card>
    );
  }

  return (
    <VStack gap="8" fullWidth className={className}>
      {data?.map((item) => (
        <Notification
          key={item.id}
          notification={item}
          onDeleteNotification={async (): Promise<void> => {
            await deleteNotification(item.id);
            refetch();
          }}
        />
      ))}
    </VStack>
  );
};
