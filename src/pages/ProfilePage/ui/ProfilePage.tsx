import React, { FC, useEffect } from 'react';
import { DynamicModuleLoader } from '@shared/lib/components/DynamicModuleLoader';
import {
  ProfileCard,
  fetchProfileData,
  profileReducer,
} from '@entities/Profile';
import { ReducerList } from '@shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from '@shared/lib/hooks/useAppDispatch';

const reducers: ReducerList = {
  profile: profileReducer,
};

const ProfilePage: FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchProfileData());
  }, [dispatch]);

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <ProfileCard />
    </DynamicModuleLoader>
  );
};

export default ProfilePage;
