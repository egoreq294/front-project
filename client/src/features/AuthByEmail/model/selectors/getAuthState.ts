import { StateSchema } from '@app/providers/StoreProvider';
import { AuthSchema } from '../types/authSchema';

export const getAuthState = (state: StateSchema): AuthSchema | undefined =>
  state?.authForm;
