import { CountryEnum } from '@entities/Country';
import { fetchProfileData } from '../fetchProfileData';
import { TestAsyncThunk } from '@shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { CurrencyEnum } from '@entities/Currency';

describe('fetchProfileData test suite', () => {
  test('should fetch data with success', async () => {
    const thunk = new TestAsyncThunk(fetchProfileData);

    thunk.api.get.mockReturnValue(
      Promise.resolve({
        data: {
          username: 'admin',
          age: '22',
          country: CountryEnum.Russia,
          firstName: 'first name',
          lastName: 'last name',
          city: 'test city',
          currency: CurrencyEnum.RUB,
        },
      }),
    );
    const result = await thunk.callThunk('1');

    expect(thunk.api.get).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('fulfilled');
    expect(result.payload).toEqual({
      username: 'admin',
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
    const result = await thunk.callThunk('1');

    expect(result.meta.requestStatus).toBe('rejected');
  });
});
