import { StateSchema } from '@app/providers/StoreProvider';

export const getAuthIsRegisterModal = (state: StateSchema): boolean =>
  !!state?.authForm?.isRegisterModal;
