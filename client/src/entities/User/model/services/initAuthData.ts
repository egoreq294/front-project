import { createAsyncThunk } from '@reduxjs/toolkit';

import { ThunkConfig } from '@app/providers/StoreProvider';
import { USER_LOCALSTORAGE_KEY } from '@shared/constants/localstorage';
import { getUserDataQuery } from '../api/userApi';
import { User } from '../types/user';

export const initAuthData = createAsyncThunk<User, void, ThunkConfig<string>>(
  'user/initAuthData',
  async (_, { rejectWithValue, dispatch }) => {
    const userId = localStorage.getItem(USER_LOCALSTORAGE_KEY);

    if (!userId) {
      return rejectWithValue('error');
    }

    try {
      const response = await dispatch(getUserDataQuery()).unwrap();

      if (!response) {
        return rejectWithValue('error');
      }

      return response;
    } catch (e) {
      return rejectWithValue('error');
    }
  },
);
