import { StateSchema } from '@app/providers/StorePovider';
import { Profile } from '../types/profile';

export const getProfileForm = (state: StateSchema): Profile | null =>
  state.profile?.form || null;
