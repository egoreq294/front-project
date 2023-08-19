import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { AddCommentFormSchema } from '../types/addCommentForm';
import { EMPTY_STRING } from '@shared/constants/common';

const initialState: AddCommentFormSchema = {
  text: EMPTY_STRING,
};

const addCommentFormSlice = createSlice({
  name: 'addCommentForm',
  initialState,
  reducers: {
    setText: (state, action: PayloadAction<string>) => {
      state.text = action.payload;
    },
  },
  //   extraReducers: (builder) => {
  //     builder.addCase(loginByUsername.pending, (state) => {
  //       state.error = undefined;
  //       state.isLoading = true;
  //     });
  //     builder.addCase(loginByUsername.fulfilled, (state) => {
  //       state.isLoading = false;
  //     });
  //     builder.addCase(loginByUsername.rejected, (state, { payload }) => {
  //       state.isLoading = false;
  //       state.error = payload;
  //     });
  //   },
});

export const { actions: addCommentFormActions } = addCommentFormSlice;
export const { reducer: addCommentFormReducer } = addCommentFormSlice;
