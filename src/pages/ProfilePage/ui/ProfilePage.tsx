import React, { FC } from 'react';
import cn from 'classnames';
import { useTranslation } from 'react-i18next';
import { DynamicModuleLoader } from '@shared/lib/components/DynamicModuleLoader';
import { profileReducer } from '@entities/Profile';
import { ReducerList } from '@shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';

const reducers: ReducerList = {
  profile: profileReducer,
};

interface ProfileProps {
  className?: string;
}

const ProfilePage: FC<ProfileProps> = ({ className }) => {
  const { t } = useTranslation();

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <div className={cn(className)}>{t('Profile')}</div>
    </DynamicModuleLoader>
  );
};

export default ProfilePage;
