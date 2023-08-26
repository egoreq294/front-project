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
      <div className={cn(styles.ProfileCard, styles.Loader, className)}>
        <Loader />
      </div>
    );
  }

  if (error) {
    return (
      <div className={cn(styles.ProfileCard, styles.Error, className)}>
        <Typography variant="M">{t('technical-error')}</Typography>
      </div>
    );
  }

  return (
    <div
      className={cn(
        styles.ProfileCard,
        { [styles.Editing]: !readonly },
        className,
      )}
    >
      <div className={styles.Content}>
        {formData?.avatar && (
          <div className={styles.Avatar}>
            <Avatar src={formData?.avatar} alt="Avatar" size={150} />
          </div>
        )}
        <Input
          value={formData?.firstName}
          placeholder={t('first-name')}
          onChange={onChangeFirstName}
          readOnly={readonly}
        />
        <Input
          value={formData?.lastName}
          placeholder={t('last-name')}
          onChange={onChangeLastName}
          readOnly={readonly}
        />
        <Input
          value={formData?.age}
          placeholder={t('age')}
          onChange={onChangeAge}
          readOnly={readonly}
        />
        <Input
          value={formData?.city}
          placeholder={t('city')}
          onChange={onChangeCity}
          readOnly={readonly}
        />
        <Input
          value={formData?.username}
          placeholder={t('username')}
          onChange={onChangeUsername}
          readOnly={readonly}
        />
        <Input
          value={formData?.avatar}
          placeholder={t('avatar')}
          onChange={onChangeAvatar}
          readOnly={readonly}
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
      </div>
    </div>
  );
};
