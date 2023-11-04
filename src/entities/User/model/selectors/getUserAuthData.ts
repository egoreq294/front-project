import { StateSchema } from '@app/providers/StoreProvider';
import { User } from '../types/user';

export const getUserAuthData = (state: StateSchema): User | null =>
  state?.user?.authData || null;
