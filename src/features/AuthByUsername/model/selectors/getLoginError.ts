import { StateSchema } from '@app/providers/StoreProvider';

export const getLoginError = (state: StateSchema): string | null =>
  state?.loginForm?.error || null;
