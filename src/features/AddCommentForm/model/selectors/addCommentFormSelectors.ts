import { StateSchema } from '@app/providers/StoreProvider';
import { EMPTY_STRING } from '@shared/constants/common';

export const getCommentFormText = (state: StateSchema): string =>
  state.addCommentForm?.text || EMPTY_STRING;

export const getCommentFormError = (state: StateSchema): string | null =>
  state.addCommentForm?.error || null;
