import { ThunkConfig } from '@app/providers/StorePovider';
import { Profile } from '@entities/Profile';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchProfileData = createAsyncThunk<
  Profile,
  string,
  ThunkConfig<string>
>('profile/fetchProfileData', async (profileId, { extra, rejectWithValue }) => {
  try {
    const response = await extra.api.get<Profile>(`/profile/${profileId}`);

    if (!response.data) {
      throw new Error();
    }

    return response.data;
  } catch (e) {
    return rejectWithValue('error');
  }
});
