import { createAsyncThunk } from '@reduxjs/toolkit';

import { ThunkConfig } from '@app/providers/StoreProvider';
import { setJsonSettingsMutation } from '../api/userApi';
import { getUserAuthData } from '../selectors/getUserAuthData';
import { getJsonSettings } from '../selectors/jsonSettings';
import { JsonSettings } from '../types/jsonSettings';

export const saveJsonSettings = createAsyncThunk<
  JsonSettings,
  JsonSettings,
  ThunkConfig<string>
>(
  'user/saveJsonSettings',
  async (newJsonSettings, { rejectWithValue, getState, dispatch }) => {
    const userData = getUserAuthData(getState());
    const currentSettings = getJsonSettings(getState());

    if (!userData) {
      return rejectWithValue('error');
    }

    try {
      const response = await dispatch(
        setJsonSettingsMutation({ ...currentSettings, ...newJsonSettings }),
      ).unwrap();

      if (!response.jsonSettings) {
        return rejectWithValue('error');
      }

      return response.jsonSettings;
    } catch (e) {
      return rejectWithValue('error');
    }
  },
);
