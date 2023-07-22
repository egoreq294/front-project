import { CountryEnum, CurrencyEnum } from '@shared/constants/common';

export interface Profile {
  firstName: string;
  lastName: string;
  age: number;
  country: CountryEnum;
  city: string;
  currency: CurrencyEnum;
  username: string;
  avatar: string;
}

export interface ProfileSchema {
  data?: Profile;
  loading: boolean;
  error?: string;
  readonly: boolean;
}
