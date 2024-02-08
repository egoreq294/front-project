import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { EMPTY_STRING } from '@shared/constants/common';
import { loginByEmail } from '../services/loginByEmail/loginByEmail';
import { registerByEmail } from '../services/loginByEmail/registerByEmail';
import { AuthSchema } from '../types/authSchema';

const initialState: AuthSchema = {
  isLoading: false,
  email: EMPTY_STRING,
  emailError: null,
  password: EMPTY_STRING,
  passwordError: null,
  isRegisterModal: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setEmail: (state, action: PayloadAction<string>) => {
      state.email = action.payload;
    },
    setPassword: (state, action: PayloadAction<string>) => {
      state.password = action.payload;
    },
    setEmailError: (state, action: PayloadAction<string | null>) => {
      state.emailError = action.payload;
    },
    setPasswordError: (state, action: PayloadAction<string | null>) => {
      state.passwordError = action.payload;
    },
    setIsRegisterModal: (state, action: PayloadAction<boolean>) => {
      state.isRegisterModal = action.payload;
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
    builder.addCase(registerByEmail.pending, (state) => {
      state.error = undefined;
      state.isLoading = true;
    });
    builder.addCase(registerByEmail.fulfilled, (state) => {
      state.isLoading = false;
    });
    builder.addCase(registerByEmail.rejected, (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    });
  },
});

export const { actions: authActions } = authSlice;
export const { reducer: authReducer } = authSlice;
