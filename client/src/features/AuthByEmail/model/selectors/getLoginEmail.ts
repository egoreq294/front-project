import { StateSchema } from '@app/providers/StoreProvider';
import { EMPTY_STRING } from '@shared/constants/common';

export const getLoginEmail = (state: StateSchema): string =>
  state?.loginForm?.email || EMPTY_STRING;
