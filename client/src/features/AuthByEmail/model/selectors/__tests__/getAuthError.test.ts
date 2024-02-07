import { StateSchema } from '@app/providers/StoreProvider';
import { getAuthError } from '../getAuthError';

describe('getAuthError test suite', () => {
  test('should return login error', () => {
    const state: DeepPartial<StateSchema> = {
      authForm: {
        email: 'test',
        password: '123',
        isLoading: false,
        error: 'error',
      },
    };

    expect(getAuthError(state as StateSchema)).toEqual('error');
  });

  test('should return null', () => {
    const state: DeepPartial<StateSchema> = {};

    expect(getAuthError(state as StateSchema)).toEqual(null);
  });
});
