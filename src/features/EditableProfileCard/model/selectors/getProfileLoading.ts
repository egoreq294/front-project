import { StateSchema } from '@app/providers/StoreProvider';

export const getProfileLoading = (state: StateSchema): boolean =>
  !!state.profile?.loading;
