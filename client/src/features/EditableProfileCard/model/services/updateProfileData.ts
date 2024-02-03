import { createAsyncThunk } from '@reduxjs/toolkit';

import { ThunkConfig } from '@app/providers/StoreProvider';
import { Profile } from '@entities/Profile';
import { ValidateProfileErrorEnum } from '../constants/constants';
import { getProfileForm } from '../selectors/getProfileForm';
import { validateProfileData } from './validateProfileData';

export const updateProfileData = createAsyncThunk<
  Profile,
  void,
  ThunkConfig<ValidateProfileErrorEnum[]>
>(
  'profile/updateProfileData',
  async (_, { extra, rejectWithValue, getState }) => {
    const formData = getProfileForm(getState());
    const errors = validateProfileData(formData);

    if (errors.length) {
      return rejectWithValue(errors);
    }

    try {
      const response = await extra.apiNew.put<Profile>(
        `/profiles/update`,
        formData,
      );

      if (!response.data) {
        throw new Error();
      }

      return response.data;
    } catch (e) {
      return rejectWithValue([ValidateProfileErrorEnum.SERVER_ERROR]);
    }
  },
);
