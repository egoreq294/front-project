import { createAsyncThunk } from '@reduxjs/toolkit';

import { ThunkConfig } from '@app/providers/StoreProvider';
import { User, userActions } from '@entities/User';
import { ACCESS_TOKEN_LOCALSTORAGE_KEY } from '@shared/constants/localstorage';

interface LoginByEmailProps {
  email: string;
  password: string;
}

export const loginByEmail = createAsyncThunk<
  User,
  LoginByEmailProps,
  ThunkConfig<string>
>(
  'login/loginByUsername',
  async ({ email, password }, { dispatch, extra, rejectWithValue }) => {
    try {
      const response = await extra.api.post('/login', {
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
