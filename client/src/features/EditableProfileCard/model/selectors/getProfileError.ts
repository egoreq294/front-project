import { StateSchema } from '@app/providers/StoreProvider';

export const getProfileError = (state: StateSchema): string | null =>
  state.editableCardProfile?.error || null;
