import { createAsyncThunk } from '@reduxjs/toolkit';

import { ThunkConfig } from '@app/providers/StoreProvider';
import { User, userActions } from '@entities/User';
import { ACCESS_TOKEN_LOCALSTORAGE_KEY } from '@shared/constants/localstorage';

interface RegisterByEmailProps {
  email: string;
  password: string;
}

export const registerByEmail = createAsyncThunk<
  User,
  RegisterByEmailProps,
  ThunkConfig<string>
>(
  'auth/registerByUsername',
  async ({ email, password }, { dispatch, extra, rejectWithValue }) => {
    try {
      const response = await extra.api.post('/register', {
        email,
        password,
      });

      if (!response.data) {
        throw new Error();
      }

      dispatch(userActions.setAuthData(response.data.user));
      localStorage.setItem(
        ACCESS_TOKEN_LOCALSTORAGE_KEY,
        response.data.accessToken,
      );

      return response.data;
    } catch (e) {
      return rejectWithValue('error');
    }
  },
);
