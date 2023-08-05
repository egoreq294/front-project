import { StateSchema } from '@app/providers/StorePovider';
import { getProfileData } from '../getProfileData';
import { CountryEnum } from '@entities/Country';
import { CurrencyEnum } from '@entities/Currency';

describe('getProfileData test suite', () => {
  test('should return profile data', () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        data: {
          username: 'admin',
          age: '22',
          country: CountryEnum.Russia,
          firstName: 'first name',
          lastName: 'last name',
          city: 'test city',
          currency: CurrencyEnum.RUB,
        },
      },
    };

    expect(getProfileData(state as StateSchema)).toEqual({
      username: 'admin',
      age: '22',
      country: CountryEnum.Russia,
      firstName: 'first name',
      lastName: 'last name',
      city: 'test city',
      currency: CurrencyEnum.RUB,
    });
  });

  test('should return null', () => {
    const state: DeepPartial<StateSchema> = {};

    expect(getProfileData(state as StateSchema)).toEqual(null);
  });
});
