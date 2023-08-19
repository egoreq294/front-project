import { CountryEnum } from '@entities/Country';
import { CurrencyEnum } from '@entities/Currency';

export enum ValidateProfileErrorEnum {
  NO_DATA = 'NO_DATA',
  SERVER_ERROR = 'SERVER_ERROR',
  INCORRECT_FIO = 'INCORRECT_FIO',
  INCORRECT_AGE = 'INCORRECT_AGE',
  INCORRECT_USERNAME = 'INCORRECT_USERNAME',
}

export interface Profile {
  id?: string;
  firstName?: string;
  lastName?: string;
  age?: string;
  country?: CountryEnum;
  city?: string;
  currency?: CurrencyEnum;
  username?: string;
  avatar?: string;
}

export interface ProfileSchema {
  data?: Profile;
  form?: Profile;
  loading: boolean;
  error?: string;
  readonly: boolean;
  validationErrors?: ValidateProfileErrorEnum[];
}
