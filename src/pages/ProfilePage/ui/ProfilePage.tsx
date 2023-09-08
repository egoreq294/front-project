import React, { FC, useCallback, useEffect } from 'react';
import { DynamicModuleLoader } from '@shared/lib/components/DynamicModuleLoader';
import {
  ProfileCard,
  fetchProfileData,
  getProfileReadonly,
  getProfileValidationErrors,
  profileActions,
  profileReducer,
} from '@entities/Profile';
import { ReducerList } from '@shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from '@shared/lib/hooks/useAppDispatch';
import { useSelector } from 'react-redux';
import { getProfileError } from '@entities/Profile/model/selectors/getProfileError';
import { getProfileLoading } from '@entities/Profile/model/selectors/getProfileLoading';
import { ProfilePageHeader } from './ProfilePageHeader/ProfilePageHeader';
import { getProfileForm } from '@entities/Profile/model/selectors/getProfileForm';
import { CurrencyEnum } from '@entities/Currency';
import { CountryEnum } from '@entities/Country';
import { ValidateProfileErrorEnum } from '@entities/Profile/model/types/profile';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { Typography } from '@shared/ui/Typography/Typography';
import styles from './styles.module.scss';
import { Page } from '@widgets/Page/Page';

const reducers: ReducerList = {
  profile: profileReducer,
};

const ProfilePage: FC = () => {
  const dispatch = useAppDispatch();
  const { id } = useParams<{ id: string }>();
  const { t } = useTranslation('profile');

  const formData = useSelector(getProfileForm);
  const error = useSelector(getProfileError);
  const loading = useSelector(getProfileLoading);
  const readonly = useSelector(getProfileReadonly);
  const validationErrors = useSelector(getProfileValidationErrors);

  const validationErrorTranslates = {
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
    if (!id) {
      return;
    }
    dispatch(fetchProfileData(id));
  }, [dispatch, id]);

  return (
    <DynamicModuleLoader reducers={reducers}>
      <Page>
        <ProfilePageHeader />
        {!!validationErrors.length &&
          validationErrors.map((validationError) => (
            <div key={validationError} className={styles.Error}>
              <Typography>
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
      </Page>
    </DynamicModuleLoader>
  );
};

export default ProfilePage;
