import { StateSchema } from '@app/providers/StoreProvider';

export const getAuthIsLoading = (state: StateSchema): boolean =>
  !!state?.authForm?.isLoading;
