import { StateSchema } from '@app/providers/StoreProvider';
import { Profile } from '@entities/Profile';

export const getProfileForm = (state: StateSchema): Profile | null =>
  state.editableCardProfile?.form || null;
