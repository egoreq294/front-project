import { StateSchema } from '@app/providers/StorePovider';
import { ValidateProfileErrorEnum } from '../types/profile';

export const getProfileValidationErrors = (
  state: StateSchema,
): ValidateProfileErrorEnum[] => state.profile?.validationErrors || [];
