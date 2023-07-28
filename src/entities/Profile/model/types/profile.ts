import { CountryEnum } from '@entities/Country';
import { CurrencyEnum } from '@entities/Currency';

export interface Profile {
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
}
