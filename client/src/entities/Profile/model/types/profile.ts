import { CountryEnum } from '@entities/Country';
import { CurrencyEnum } from '@entities/Currency';

export interface Profile {
  id?: string;
  firstName?: string;
  lastName?: string;
  age?: string;
  country?: CountryEnum;
  city?: string;
  currency?: CurrencyEnum;
  avatar?: string;
}
