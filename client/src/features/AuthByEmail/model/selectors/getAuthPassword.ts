import { StateSchema } from '@app/providers/StoreProvider';

export const getAuthPassword = (state: StateSchema): string =>
  state?.authForm?.password || '';
