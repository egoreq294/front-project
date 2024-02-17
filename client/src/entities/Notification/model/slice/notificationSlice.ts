import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Notification, NotificationSchema } from '../types/notification';

const initialState: NotificationSchema = {
  data: null,
  error: null,
  isLoading: false,
};

const notificationSlice = createSlice({
  name: 'notification',
  initialState,
  reducers: {
    fetchNotifications: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    fetchNotificationsSuccess: (
      state,
      action: PayloadAction<Notification[]>,
    ) => {
      state.isLoading = false;
      state.data = action.payload;
    },
    fetchNotificationsError: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    deleteNotification: (state, _: PayloadAction<string>) => {
      state.isLoading = true;
      state.error = null;
    },
    deleteNotificationSuccess: (
      state,
      action: PayloadAction<Notification[]>,
    ) => {
      state.isLoading = false;
      state.data = action.payload;
    },
    deleteNotificationError: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const { actions: notificationActions } = notificationSlice;
export const { reducer: notificationReducer } = notificationSlice;
