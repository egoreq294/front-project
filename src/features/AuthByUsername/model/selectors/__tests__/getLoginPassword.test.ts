import { StateSchema } from '@app/providers/StorePovider';
import { getLoginPassword } from '../getLoginPassword';

describe('getLoginPassword test suite', () => {
  test('should return login password', () => {
    const state: DeepPartial<StateSchema> = {
      loginForm: { username: 'test', password: '123', isLoading: false },
    };

    expect(getLoginPassword(state as StateSchema)).toEqual('123');
  });

  test('should return empty string', () => {
    const state: DeepPartial<StateSchema> = {};

    expect(getLoginPassword(state as StateSchema)).toEqual('');
  });
});
