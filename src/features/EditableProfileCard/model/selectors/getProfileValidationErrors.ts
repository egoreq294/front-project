import { StateSchema } from '@app/providers/StorePovider';
import { ValidateProfileErrorEnum } from '../types/editableProfileCardSchema';

export const getProfileValidationErrors = (
  state: StateSchema,
): ValidateProfileErrorEnum[] => state.profile?.validationErrors || [];
