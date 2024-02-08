import { StateSchema } from '@app/providers/StoreProvider';

export const getAuthEmailError = (state: StateSchema): string | null =>
  state?.authForm?.emailError || null;
