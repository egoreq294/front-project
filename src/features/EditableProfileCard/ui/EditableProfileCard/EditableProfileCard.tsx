import React, { FC, useCallback, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { CountryEnum } from '@entities/Country';
import { CurrencyEnum } from '@entities/Currency';
import { ProfileCard } from '@entities/Profile';
import { DynamicModuleLoader } from '@shared/lib/components/DynamicModuleLoader';
import { ReducerList } from '@shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from '@shared/lib/hooks/useAppDispatch';
import { VStack } from '@shared/ui/Stack';
import { Typography } from '@shared/ui/Typography/Typography';
import { ValidateProfileErrorEnum } from '../../model/constants/constants';
import { getProfileError } from '../../model/selectors/getProfileError';
import { getProfileForm } from '../../model/selectors/getProfileForm';
import { getProfileLoading } from '../../model/selectors/getProfileLoading';
import { getProfileReadonly } from '../../model/selectors/getProfileReadonly';
import { getProfileValidationErrors } from '../../model/selectors/getProfileValidationErrors';
import { fetchProfileData } from '../../model/services/fetchProfileData';
import { profileActions, profileReducer } from '../../model/slice/profileSlice';
import { EditableProfileCardHeader } from '../EditableProfileCardHeader/EditableProfileCardHeader';

import styles from './styles.module.scss';

const reducers: ReducerList = {
  profile: profileReducer,
};

interface EditableProfileCardProps {
  id: string;
  className?: string;
}

export const EditableProfileCard: FC<EditableProfileCardProps> = ({
  id,
  className,
}) => {
  const { t } = useTranslation('profile');
  const dispatch = useAppDispatch();

  const formData = useSelector(getProfileForm);
  const error = useSelector(getProfileError);
  const loading = useSelector(getProfileLoading);
  const readonly = useSelector(getProfileReadonly);
  const validationErrors = useSelector(getProfileValidationErrors);

  const validationErrorTranslates: Record<ValidateProfileErrorEnum, string> = {
    [ValidateProfileErrorEnum.INCORRECT_AGE]: t('incorrect-age-error'),
    [ValidateProfileErrorEnum.INCORRECT_USERNAME]: t('username-error'),
    [ValidateProfileErrorEnum.INCORRECT_FIO]: t('fio-error'),
    [ValidateProfileErrorEnum.NO_DATA]: t('no-data-error'),
    [ValidateProfileErrorEnum.SERVER_ERROR]: t('server-error'),
  };

  const onChangeFirstName = useCallback(
    (value: string) => {
      dispatch(profileActions.updateProfile({ firstName: value }));
    },
    [dispatch],
  );
  const onChangeLastName = useCallback(
    (value: string) => {
      dispatch(profileActions.updateProfile({ lastName: value }));
    },
    [dispatch],
  );
  const onChangeAge = useCallback(
    (value: string) => {
      dispatch(profileActions.updateProfile({ age: value }));
    },
    [dispatch],
  );
  const onChangeCity = useCallback(
    (value: string) => {
      dispatch(profileActions.updateProfile({ city: value }));
    },
    [dispatch],
  );
  const onChangeUsername = useCallback(
    (value: string) => {
      dispatch(profileActions.updateProfile({ username: value }));
    },
    [dispatch],
  );
  const onChangeAvatar = useCallback(
    (value: string) => {
      dispatch(profileActions.updateProfile({ avatar: value }));
    },
    [dispatch],
  );
  const onChangeCurrency = useCallback(
    (value: CurrencyEnum) => {
      dispatch(profileActions.updateProfile({ currency: value }));
    },
    [dispatch],
  );
  const onChangeCountry = useCallback(
    (value: CountryEnum) => {
      dispatch(profileActions.updateProfile({ country: value }));
    },
    [dispatch],
  );

  useEffect(() => {
    dispatch(fetchProfileData(id));
  }, [dispatch, id]);

  return (
    <DynamicModuleLoader reducers={reducers}>
      <VStack gap="16" fullWidth className={className}>
        <EditableProfileCardHeader />
        {!!validationErrors.length &&
          validationErrors.map((validationError) => (
            <div key={validationError} className={styles.Error}>
              <Typography testId="Error">
                {validationErrorTranslates[validationError]}
              </Typography>
            </div>
          ))}
        <ProfileCard
          formData={formData}
          error={error}
          loading={loading}
          readonly={readonly}
          onChangeFirstName={onChangeFirstName}
          onChangeLastName={onChangeLastName}
          onChangeAge={onChangeAge}
          onChangeCity={onChangeCity}
          onChangeUsername={onChangeUsername}
          onChangeAvatar={onChangeAvatar}
          onChangeCurrency={onChangeCurrency}
          onChangeCountry={onChangeCountry}
        />
      </VStack>
    </DynamicModuleLoader>
  );
};
