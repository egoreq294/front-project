import { StateSchema } from '@app/providers/StoreProvider';
import { getAuthIsLoading } from '../getAuthIsLoading';

describe('getAuthIsLoading test suite', () => {
  test('should return true', () => {
    const state: DeepPartial<StateSchema> = {
      authForm: {
        email: 'test',
        password: '123',
        isLoading: true,
        error: 'error',
      },
    };

    expect(getAuthIsLoading(state as StateSchema)).toEqual(true);
  });

  test('should return false', () => {
    const state: DeepPartial<StateSchema> = {
      authForm: {
        email: 'test',
        password: '123',
        isLoading: false,
        error: 'error',
      },
    };

    expect(getAuthIsLoading(state as StateSchema)).toEqual(false);
  });

  test('should return false for empty state', () => {
    const state: DeepPartial<StateSchema> = {};

    expect(getAuthIsLoading(state as StateSchema)).toEqual(false);
  });
});
