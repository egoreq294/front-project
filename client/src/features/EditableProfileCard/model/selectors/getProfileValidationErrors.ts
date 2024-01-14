import { StateSchema } from '@app/providers/StoreProvider';
import { ValidateProfileErrorEnum } from '../constants/constants';

export const getProfileValidationErrors = (
  state: StateSchema,
): ValidateProfileErrorEnum[] =>
  state.editableCardProfile?.validationErrors || [];
