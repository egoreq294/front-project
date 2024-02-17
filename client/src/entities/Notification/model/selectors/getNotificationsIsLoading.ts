import { StateSchema } from '@app/providers/StoreProvider';

export const getNotificationsIsLoading = (state: StateSchema): boolean =>
  !!state?.notification?.isLoading;
