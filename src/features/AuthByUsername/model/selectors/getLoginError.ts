import { StateSchema } from '@app/providers/StorePovider';

export const getLoginError = (state: StateSchema): string | null =>
  state?.loginForm?.error || null;
