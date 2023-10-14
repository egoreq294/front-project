import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { fetchProfileData } from '../services/fetchProfileData';
import { updateProfileData } from '../services/updateProfileData';
import { ProfileSchema } from '../types/editableProfileCardSchema';
import { Profile } from '@entities/Profile';

const initialState: ProfileSchema = {
  readonly: true,
  loading: false,
};

const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    setReadonly: (state, action: PayloadAction<boolean>) => {
      state.readonly = action.payload;
    },
    cancelEdit: (state) => {
      state.readonly = true;
      state.validationErrors = [];
      state.form = state.data;
    },
    updateProfile: (state, action: PayloadAction<Profile>) => {
      state.form = { ...state.form, ...action.payload };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProfileData.pending, (state) => {
      state.error = undefined;
      state.loading = true;
    });
    builder.addCase(fetchProfileData.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.data = payload;
      state.form = payload;
    });
    builder.addCase(fetchProfileData.rejected, (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    });
    builder.addCase(updateProfileData.pending, (state) => {
      state.validationErrors = undefined;
      state.loading = true;
    });
    builder.addCase(updateProfileData.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.data = payload;
      state.form = payload;
      state.readonly = true;
      state.validationErrors = undefined;
    });
    builder.addCase(updateProfileData.rejected, (state, { payload }) => {
      state.loading = false;
      state.validationErrors = payload;
    });
  },
});

export const { actions: profileActions } = profileSlice;
export const { reducer: profileReducer } = profileSlice;
