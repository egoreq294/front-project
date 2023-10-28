import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { Card } from '@shared/ui/Card/Card';
import { Skeleton } from '@shared/ui/Skeleton/Skeleton';
import { VStack } from '@shared/ui/Stack';
import { Typography } from '@shared/ui/Typography/Typography';
import { useNotifications } from '../api/notificationApi';
import { Notification } from './Notification';

import styles from './styles.module.scss';

interface NotificationListProps {
  className?: string;
}

export const NotificationList: FC<NotificationListProps> = ({ className }) => {
  const { data, isLoading } = useNotifications(null, { pollingInterval: 5000 });
  const { t } = useTranslation();

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
      <Card variant="Secondary" className={styles.EmptyNotifications}>
        <Typography variant="M">{t('empty-notofications')}</Typography>
      </Card>
    );
  }

  return (
    <VStack gap="8" fullWidth className={className}>
      {data?.map((item) => (
        <Notification key={item.id} notification={item} />
      ))}
    </VStack>
  );
};
