import { CountryEnum } from '@entities/Country';
import { CurrencyEnum } from '@entities/Currency';
import { TestAsyncThunk } from '@shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { fetchProfileData } from '../fetchProfileData';

describe('fetchProfileData test suite', () => {
  test('should fetch data with success', async () => {
    const thunk = new TestAsyncThunk(fetchProfileData);

    thunk.apiNew.get.mockReturnValue(
      Promise.resolve({
        data: {
          email: 'admin',
          age: '22',
          country: CountryEnum.Russia,
          firstName: 'first name',
          lastName: 'last name',
          city: 'test city',
          currency: CurrencyEnum.RUB,
        },
      }),
    );
    const result = await thunk.callThunkNew('1');

    expect(thunk.apiNew.get).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('fulfilled');
    expect(result.payload).toEqual({
      email: 'admin',
      age: '22',
      country: CountryEnum.Russia,
      firstName: 'first name',
      lastName: 'last name',
      city: 'test city',
      currency: CurrencyEnum.RUB,
    });
  });

  test('should fetch data with error', async () => {
    const thunk = new TestAsyncThunk(fetchProfileData);
    thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }));
    const result = await thunk.callThunkNew('1');

    expect(result.meta.requestStatus).toBe('rejected');
  });
});
