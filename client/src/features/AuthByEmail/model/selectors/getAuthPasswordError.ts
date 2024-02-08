import { StateSchema } from '@app/providers/StoreProvider';

export const getAuthPasswordError = (state: StateSchema): string | null =>
  state?.authForm?.passwordError || null;
