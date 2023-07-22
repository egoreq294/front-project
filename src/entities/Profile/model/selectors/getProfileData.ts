import { StateSchema } from '@app/providers/StorePovider';
import { Profile } from '../types/profile';

export const getProfileData = (state: StateSchema): Profile | null =>
  state.profile?.data || null;
