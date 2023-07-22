import { StateSchema } from '@app/providers/StorePovider';

export const getProfileError = (state: StateSchema): string | null =>
  state.profile?.error || null;
