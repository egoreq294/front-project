import cn from 'classnames';
import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { CountryEnum, CountrySelect } from '@entities/Country';
import { CurrencyEnum, CurrencySelect } from '@entities/Currency';
import { Avatar } from '@shared/ui/Avatar';
import { Card } from '@shared/ui/Card';
import { Input } from '@shared/ui/Input';
import { Skeleton } from '@shared/ui/Skeleton';
import { HStack, VStack } from '@shared/ui/Stack';
import { Typography } from '@shared/ui/Typography';
import { Profile } from '../model/types/profile';

import styles from './styles.module.scss';

interface ProfileCardProps {
  className?: string;
  formData: Profile | null;
  error: string | null;
  loading: boolean;
  readonly: boolean;
  onChangeFirstName?: (value: string) => void;
  onChangeLastName?: (value: string) => void;
  onChangeAge?: (value: string) => void;
  onChangeCity?: (value: string) => void;
  onChangeUsername?: (value: string) => void;
  onChangeAvatar?: (value: string) => void;
  onChangeCurrency?: (value: CurrencyEnum) => void;
  onChangeCountry?: (value: CountryEnum) => void;
}

export const ProfileCard: FC<ProfileCardProps> = ({
  className,
  formData,
  loading,
  error,
  readonly,
  onChangeFirstName,
  onChangeLastName,
  onChangeAge,
  onChangeCity,
  onChangeUsername,
  onChangeAvatar,
  onChangeCurrency,
  onChangeCountry,
}) => {
  const { t } = useTranslation('profile');

  if (loading) {
    return (
      <Card
        fullWidth
        className={cn(styles.ProfileCard, styles.Loader, className)}
        padding="24"
      >
        <Skeleton height={300} />
      </Card>
    );
  }

  if (error) {
    return (
      <Card
        fullWidth
        className={cn(styles.ProfileCard, styles.Error, className)}
        padding="24"
      >
        <Typography variant="M">{t('technical-error')}</Typography>
      </Card>
    );
  }

  return (
    <Card
      data-testid="ProfileCardContent"
      fullWidth
      className={cn(
        styles.ProfileCard,
        { [styles.Editing]: !readonly },
        className,
      )}
      padding="24"
    >
      {formData?.avatar && (
        <HStack fullWidth justify="center">
          <Avatar src={formData?.avatar} alt="Avatar" size={128} />
        </HStack>
      )}
      <HStack gap="24" fullWidth align="start">
        <VStack gap="16" fullWidth>
          <Input
            value={formData?.firstName}
            label={`${t('first-name')}:`}
            onChange={onChangeFirstName}
            disabled={readonly}
            testId="FirstName"
          />
          <Input
            value={formData?.lastName}
            label={`${t('last-name')}:`}
            onChange={onChangeLastName}
            disabled={readonly}
            testId="LastName"
          />
          <Input
            value={formData?.age}
            label={`${t('age')}:`}
            onChange={onChangeAge}
            disabled={readonly}
            testId="Age"
          />
          <Input
            value={formData?.city}
            label={`${t('city')}:`}
            onChange={onChangeCity}
            disabled={readonly}
            testId="City"
          />
        </VStack>
        <VStack gap="16" fullWidth>
          <Input
            value={formData?.username}
            label={`${t('username')}:`}
            onChange={onChangeUsername}
            disabled={readonly}
            testId="Username"
          />
          <Input
            value={formData?.avatar}
            label={`${t('avatar-link')}:`}
            onChange={onChangeAvatar}
            disabled={readonly}
            testId="Avatar"
          />
          <CurrencySelect
            value={formData?.currency}
            onChange={onChangeCurrency}
            readOnly={readonly}
          />
          <CountrySelect
            value={formData?.country}
            onChange={onChangeCountry}
            readOnly={readonly}
          />
        </VStack>
      </HStack>
    </Card>
  );
};
