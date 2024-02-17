import { StateSchema } from '@app/providers/StoreProvider';
import { Notification } from '../types/notification';

export const getNotificationsData = (state: StateSchema): Notification[] =>
  state?.notification?.data ?? [];
