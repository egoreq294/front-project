import { StateSchema } from '@app/providers/StorePovider';

export const getUserInited = (state: StateSchema): boolean =>
  !!state?.user._inited;
