import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { v4 as uuid } from 'uuid';

import { Popup, PopupProps, PopupSchema } from './types';

const initialState: PopupSchema = { popups: [] };

const popupSlice = createSlice({
  name: 'popup',
  initialState,
  reducers: {
    addPopup: (state, action: PayloadAction<PopupProps>) => {
      const newPopup: Popup = { ...action.payload, id: uuid() };
      state.popups.push(newPopup);
    },
    removePopup: (state, action: PayloadAction<string>) => {
      const newPopups = state.popups.filter(
        (popup) => popup.id !== action.payload,
      );
      state.popups = newPopups;
    },
  },
});

export const {
  actions: { addPopup, removePopup },
} = popupSlice;
export const { reducer: popupReducer } = popupSlice;
