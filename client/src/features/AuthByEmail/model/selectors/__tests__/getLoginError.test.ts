import { StateSchema } from '@app/providers/StoreProvider';
import { getLoginError } from '../getLoginError';

describe('getLoginError test suite', () => {
  test('should return login error', () => {
    const state: DeepPartial<StateSchema> = {
      loginForm: {
        email: 'test',
        password: '123',
        isLoading: false,
        error: 'error',
      },
    };

    expect(getLoginError(state as StateSchema)).toEqual('error');
  });

  test('should return null', () => {
    const state: DeepPartial<StateSchema> = {};

    expect(getLoginError(state as StateSchema)).toEqual(null);
  });
});
