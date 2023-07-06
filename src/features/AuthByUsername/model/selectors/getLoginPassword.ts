import { StateSchema } from '@app/providers/StorePovider';

export const getLoginPassword = (state: StateSchema): string =>
  state?.loginForm?.password || '';
