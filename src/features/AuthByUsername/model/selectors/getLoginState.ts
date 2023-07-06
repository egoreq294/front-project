import { StateSchema } from '@app/providers/StorePovider';
import { LoginSchema } from '../types/loginSchema';

export const getLoginState = (state: StateSchema): LoginSchema =>
  state.loginForm;
