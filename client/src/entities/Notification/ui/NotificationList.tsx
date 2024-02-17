import React, { FC, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { useAppDispatch } from '@shared/lib/hooks/useAppDispatch';
import { Card } from '@shared/ui/Card';
import { Skeleton } from '@shared/ui/Skeleton';
import { VStack } from '@shared/ui/Stack';
import { Typography } from '@shared/ui/Typography';
import { getNotificationsData } from '../model/selectors/getNotificationsData';
import { getNotificationsIsLoading } from '../model/selectors/getNotificationsIsLoading';
import { notificationActions } from '../model/slice/notificationSlice';
import { Notification } from './Notification';

interface NotificationListProps {
  className?: string;
}

export const NotificationList: FC<NotificationListProps> = ({ className }) => {
  const disaptch = useAppDispatch();
  const { t } = useTranslation();

  const data = useSelector(getNotificationsData);
  const isLoading = useSelector(getNotificationsIsLoading);

  useEffect(() => {
    disaptch(notificationActions.fetchNotifications());
  }, [disaptch]);

  if (isLoading) {
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
            disaptch(notificationActions.deleteNotification(item.id));
          }}
        />
      ))}
    </VStack>
  );
};
