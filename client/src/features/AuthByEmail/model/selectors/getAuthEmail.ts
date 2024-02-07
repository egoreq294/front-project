import { StateSchema } from '@app/providers/StoreProvider';
import { EMPTY_STRING } from '@shared/constants/common';

export const getAuthEmail = (state: StateSchema): string =>
  state?.authForm?.email || EMPTY_STRING;
