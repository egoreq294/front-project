import { StateSchema } from '@app/providers/StoreProvider';
import { CountryEnum } from '@entities/Country';
import { CurrencyEnum } from '@entities/Currency';
import { getProfileForm } from '../getProfileForm';

describe('getProfileForm test suite', () => {
  test('should return profile form', () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        form: {
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

    expect(getProfileForm(state as StateSchema)).toEqual({
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

    expect(getProfileForm(state as StateSchema)).toEqual(null);
  });
});
