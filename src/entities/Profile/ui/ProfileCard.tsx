import React, { FC } from 'react';
import cn from 'classnames';
import styles from './styles.module.scss';
import { useTranslation } from 'react-i18next';
import { Input } from '@shared/ui/Input/Input';
import { Profile } from '../model/types/profile';
import { Loader } from '@shared/ui/Loader/Loader';
import { Avatar } from '@shared/ui/Avatar/Avatar';
import { CurrencyEnum, CurrencySelect } from '@entities/Currency';
import { CountryEnum, CountrySelect } from '@entities/Country';
import { Typography } from '@shared/ui/Typography/Typography';
import { HStack, VStack } from '@shared/ui/Stack';

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
      <HStack
        fullWidth
        justify="center"
        className={cn(styles.ProfileCard, styles.Loader, className)}
      >
        <Loader testId="Dgt38bx1" />
      </HStack>
    );
  }

  if (error) {
    return (
      <HStack
        fullWidth
        justify="center"
        className={cn(styles.ProfileCard, styles.Error, className)}
      >
        <Typography variant="M">{t('technical-error')}</Typography>
      </HStack>
    );
  }

  return (
    <VStack
      data-testid="ProfileCardContent"
      fullWidth
      gap="8"
      className={cn(
        styles.ProfileCard,
        { [styles.Editing]: !readonly },
        className,
      )}
    >
      {formData?.avatar && (
        <HStack fullWidth justify="center">
          <Avatar src={formData?.avatar} alt="Avatar" size={150} />
        </HStack>
      )}
      <Input
        value={formData?.firstName}
        placeholder={t('first-name')}
        onChange={onChangeFirstName}
        readOnly={readonly}
        testId="FirstName"
      />
      <Input
        value={formData?.lastName}
        placeholder={t('last-name')}
        onChange={onChangeLastName}
        readOnly={readonly}
        testId="LastName"
      />
      <Input
        value={formData?.age}
        placeholder={t('age')}
        onChange={onChangeAge}
        readOnly={readonly}
        testId="Age"
      />
      <Input
        value={formData?.city}
        placeholder={t('city')}
        onChange={onChangeCity}
        readOnly={readonly}
        testId="City"
      />
      <Input
        value={formData?.username}
        placeholder={t('username')}
        onChange={onChangeUsername}
        readOnly={readonly}
        testId="Username"
      />
      <Input
        value={formData?.avatar}
        placeholder={t('avatar')}
        onChange={onChangeAvatar}
        readOnly={readonly}
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
  );
};
