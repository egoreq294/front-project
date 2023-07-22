import { StateSchema } from '@app/providers/StorePovider';

export const getProfileLoading = (state: StateSchema): boolean =>
  !!state.profile?.loading;
