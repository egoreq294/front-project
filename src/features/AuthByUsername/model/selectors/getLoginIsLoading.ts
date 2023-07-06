import { StateSchema } from '@app/providers/StorePovider';

export const getLoginIsLoading = (state: StateSchema): boolean =>
  !!state?.loginForm?.isLoading;
