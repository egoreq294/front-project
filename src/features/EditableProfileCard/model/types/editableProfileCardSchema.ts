import { Profile } from '@entities/Profile';

export enum ValidateProfileErrorEnum {
  NO_DATA = 'NO_DATA',
  SERVER_ERROR = 'SERVER_ERROR',
  INCORRECT_FIO = 'INCORRECT_FIO',
  INCORRECT_AGE = 'INCORRECT_AGE',
  INCORRECT_USERNAME = 'INCORRECT_USERNAME',
}

export interface ProfileSchema {
  data?: Profile;
  form?: Profile;
  loading: boolean;
  error?: string;
  readonly: boolean;
  validationErrors?: ValidateProfileErrorEnum[];
}
