import { StateSchema } from '@app/providers/StorePovider';

export const getLoginUsername = (state: StateSchema): string =>
  state?.loginForm?.username || '';
