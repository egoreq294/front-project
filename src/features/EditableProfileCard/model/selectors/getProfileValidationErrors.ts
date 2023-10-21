import { StateSchema } from '@app/providers/StorePovider';
import { ValidateProfileErrorEnum } from '../constants/constants';

export const getProfileValidationErrors = (
  state: StateSchema,
): ValidateProfileErrorEnum[] => state.profile?.validationErrors || [];
