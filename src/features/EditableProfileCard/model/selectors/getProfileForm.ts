import { StateSchema } from '@app/providers/StorePovider';
import { Profile } from '@entities/Profile';

export const getProfileForm = (state: StateSchema): Profile | null =>
  state.profile?.form || null;
