import { StateSchema } from '@app/providers/StorePovider';
import { DeepPartial } from '@reduxjs/toolkit';
import { getLoginIsLoading } from '../getLoginIsLoading';

describe('getLoginIsLoading test suite', () => {
  test('should return true', () => {
    const state: DeepPartial<StateSchema> = {
      loginForm: {
        username: 'test',
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
        username: 'test',
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
