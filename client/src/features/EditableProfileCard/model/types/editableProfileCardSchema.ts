import { Profile } from '@entities/Profile';
import { ValidateProfileErrorEnum } from '../constants/constants';

export interface EditableCardProfileSchema {
  data?: Profile;
  form?: Profile;
  loading: boolean;
  error?: string;
  readonly: boolean;
  validationErrors?: ValidateProfileErrorEnum[];
}
