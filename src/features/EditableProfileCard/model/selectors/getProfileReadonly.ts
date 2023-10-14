import { StateSchema } from '@app/providers/StorePovider';

export const getProfileReadonly = (state: StateSchema): boolean =>
  !!state.profile?.readonly;
