import { StateSchema } from '@app/providers/StoreProvider';
import { Profile } from '@entities/Profile';

export const getProfileData = (state: StateSchema): Profile | null =>
  state.profile?.data || null;
