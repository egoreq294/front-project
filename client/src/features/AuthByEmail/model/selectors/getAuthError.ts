import { StateSchema } from '@app/providers/StoreProvider';

export const getAuthError = (state: StateSchema): string | null =>
  state?.authForm?.error || null;
