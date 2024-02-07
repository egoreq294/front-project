import { StateSchema } from '@app/providers/StoreProvider';
import { getAuthPassword } from '../getAuthPassword';

describe('getAuthPassword test suite', () => {
  test('should return login password', () => {
    const state: DeepPartial<StateSchema> = {
      authForm: { email: 'test', password: '123', isLoading: false },
    };

    expect(getAuthPassword(state as StateSchema)).toEqual('123');
  });

  test('should return empty string', () => {
    const state: DeepPartial<StateSchema> = {};

    expect(getAuthPassword(state as StateSchema)).toEqual('');
  });
});
