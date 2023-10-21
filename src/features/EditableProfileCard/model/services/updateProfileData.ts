import { ThunkConfig } from '@app/providers/StorePovider';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { Profile } from '@entities/Profile';
import { getProfileForm } from '../selectors/getProfileForm';
import { validateProfileData } from './validateProfileData';
import { ValidateProfileErrorEnum } from '../constants/constants';

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
      const response = await extra.api.put<Profile>(
        `/profile/${formData?.id}`,
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
