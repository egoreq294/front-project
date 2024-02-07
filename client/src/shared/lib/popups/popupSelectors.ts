import { StateSchema } from '@app/providers/StoreProvider';
import { Popup } from './types';

export const getPopups = (state: StateSchema): Popup[] => state.popup.popups;
