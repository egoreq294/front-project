import { createAsyncThunk } from '@reduxjs/toolkit';

import { ThunkConfig } from '@app/providers/StoreProvider';
import { Profile } from '@entities/Profile';
import { getUserAuthData, userActions } from '@entities/User';
import { ValidateProfileErrorEnum } from '../constants/constants';
import { getProfileForm } from '../selectors/getProfileForm';
import { validateProfileData } from './validateProfileData';

export const updateProfileData = createAsyncThunk<
  Profile,
  void,
  ThunkConfig<ValidateProfileErrorEnum[]>
>(
  'profile/updateProfileData',
  async (_, { extra, rejectWithValue, getState, dispatch }) => {
    const formData = getProfileForm(getState());
    const errors = validateProfileData(formData);
    const authData = getUserAuthData(getState());

    if (errors.length) {
      return rejectWithValue(errors);
    }

    try {
      const response = await extra.api.put<Profile>(
        `/profiles/update`,
        formData,
      );

      if (!response.data) {
        throw new Error();
      }

      if (authData) {
        dispatch(
          userActions.setAuthData({
            ...authData,
            profile: response.data,
          }),
        );
      }

      return response.data;
    } catch (e) {
      return rejectWithValue([ValidateProfileErrorEnum.SERVER_ERROR]);
    }
  },
);
