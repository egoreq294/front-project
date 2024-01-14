import { StateSchema } from '@app/providers/StoreProvider';
import { getLoginIsLoading } from '../getLoginIsLoading';

describe('getLoginIsLoading test suite', () => {
  test('should return true', () => {
    const state: DeepPartial<StateSchema> = {
      loginForm: {
        email: 'test',
        password: '123',
        isLoading: true,
        error: 'error',
      },
    };

    expect(getLoginIsLoading(state as StateSchema)).toEqual(true);
  });

  test('should return false', () => {
    const state: DeepPartial<StateSchema> = {
      loginForm: {
        email: 'test',
        password: '123',
        isLoading: false,
        error: 'error',
      },
    };

    expect(getLoginIsLoading(state as StateSchema)).toEqual(false);
  });

  test('should return false for empty state', () => {
    const state: DeepPartial<StateSchema> = {};

    expect(getLoginIsLoading(state as StateSchema)).toEqual(false);
  });
});
