import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { EMPTY_STRING } from '@shared/constants/common';
import { loginByEmail } from '../services/loginByEmail/loginByEmail';
import { LoginSchema } from '../types/loginSchema';

const initialState: LoginSchema = {
  isLoading: false,
  email: EMPTY_STRING,
  password: EMPTY_STRING,
};

const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    setEmail: (state, action: PayloadAction<string>) => {
      state.email = action.payload;
    },
    setPassword: (state, action: PayloadAction<string>) => {
      state.password = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loginByEmail.pending, (state) => {
      state.error = undefined;
      state.isLoading = true;
    });
    builder.addCase(loginByEmail.fulfilled, (state) => {
      state.isLoading = false;
    });
    builder.addCase(loginByEmail.rejected, (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    });
  },
});

export const { actions: loginActions } = loginSlice;
export const { reducer: loginReducer } = loginSlice;
