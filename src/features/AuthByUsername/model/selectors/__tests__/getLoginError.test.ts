import { StateSchema } from '@app/providers/StorePovider';
import { DeepPartial } from '@reduxjs/toolkit';
import { getLoginError } from '../getLoginError';

describe('getLoginError test suite', () => {
  test('should return login error', () => {
    const state: DeepPartial<StateSchema> = {
      loginForm: {
        username: 'test',
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
