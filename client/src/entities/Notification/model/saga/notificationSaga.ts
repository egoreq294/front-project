import { PayloadAction } from '@reduxjs/toolkit';
import { AxiosResponse } from 'axios';
import { all, fork, ForkEffect, put, takeLatest } from 'redux-saga/effects';

import { $api } from '@shared/api/api';
import { notificationActions } from '../slice/notificationSlice';
import { Notification } from '../types/notification';

function* fetchNotificationsSaga(): Generator<
  unknown,
  void,
  AxiosResponse<Notification[]>
> {
  try {
    const response = yield $api.get<Notification[]>(`/user/notifications`);

    yield put(notificationActions.fetchNotificationsSuccess(response.data));
  } catch (error) {
    yield put(notificationActions.fetchNotificationsError(error as string));
  }
}

export function* watchFetchNotifications(): Generator<ForkEffect> {
  yield takeLatest('notification/fetchNotifications', fetchNotificationsSaga);
}

function* deleteNotificationSaga({
  payload: id,
}: PayloadAction<string>): Generator<
  unknown,
  void,
  AxiosResponse<Notification[]>
> {
  try {
    const response = yield $api.delete<Notification[]>(`/user/notifications`, {
      data: { notificationId: id },
    });

    yield put(notificationActions.deleteNotificationSuccess(response.data));
  } catch (error) {
    yield put(notificationActions.deleteNotificationError(error as string));
  }
}

export function* watchDeleteNotification(): Generator<ForkEffect> {
  yield takeLatest('notification/deleteNotification', deleteNotificationSaga);
}

export function* watchNotification(): Generator {
  yield all([fork(watchFetchNotifications), fork(watchDeleteNotification)]);
}
