import React, { FC } from 'react';
import cn from 'classnames';
import styles from './styles.module.scss';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { getProfileData } from '../model/selectors/getProfileData';
import { getProfileError } from '../model/selectors/getProfileError';
import { getProfileLoading } from '../model/selectors/getProfileLoading';
import { Caption } from '@shared/ui/Caption/Caption';
import { Button } from '@shared/ui/Button/Button';
import { Input } from '@shared/ui/Input/Input';

interface ProfileCardProps {
  className?: string;
}

export const ProfileCard: FC<ProfileCardProps> = ({ className }) => {
  const { t } = useTranslation('profile');

  const data = useSelector(getProfileData);
  const error = useSelector(getProfileError);
  const loading = useSelector(getProfileLoading);

  return (
    <div className={cn(styles.ProfileCard, className)}>
      <div className={styles.Header}>
        <Caption label={t('profile')} />
        <Button variant="Secondary">{t('edit')}</Button>
      </div>
      <div className={styles.Content}>
        <Input value={data?.firstName} placeholder={t('first-name')} />
        <Input value={data?.lastName} placeholder={t('last-name')} />
      </div>
    </div>
  );
};
