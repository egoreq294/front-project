export enum CurrencyEnum {
  "RUB" = "RUB",
  "USD" = "USD",
  "EUR" = "EUR",
}

export enum CountryEnum {
  RUSSIA = "RUSSIA",
  UNITED_STATES = "UNITED_STATES",
}

export type Profile = {
  firstName?: string;
  lastName?: string;
  avatar?: string;
  age?: string;
  country?: CountryEnum;
  city?: string;
  currency?: CurrencyEnum;
};
