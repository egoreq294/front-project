import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { LoginSchema } from '../types/loginSchema';
import { loginByUsername } from '../services/loginByUsername/loginByUsername';

const initialState: LoginSchema = {
  isLoading: false,
  username: '',
  password: '',
};

const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    setUsername: (state, action: PayloadAction<string>) => {
      state.username = action.payload;
    },
    setPassword: (state, action: PayloadAction<string>) => {
      state.password = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loginByUsername.pending, (state, { payload }) => {
      state.error = undefined;
      state.isLoading = true;
    });
    builder.addCase(loginByUsername.fulfilled, (state, { payload }) => {
      state.isLoading = false;
    });
    builder.addCase(loginByUsername.rejected, (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    });
  },
});

export const { actions: loginActions } = loginSlice;
export const { reducer: loginReducer } = loginSlice;
