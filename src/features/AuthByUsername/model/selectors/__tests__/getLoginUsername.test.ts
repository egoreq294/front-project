import { StateSchema } from '@app/providers/StorePovider';
import { DeepPartial } from '@reduxjs/toolkit';
import { getLoginUsername } from '../getLoginUsername';

describe('getLoginUsername test suite', () => {
  test('should return login username', () => {
    const state: DeepPartial<StateSchema> = {
      loginForm: { username: 'test', password: '123', isLoading: false },
    };

    expect(getLoginUsername(state as StateSchema)).toEqual('test');
  });

  test('should return empty string', () => {
    const state: DeepPartial<StateSchema> = {};

    expect(getLoginUsername(state as StateSchema)).toEqual('');
  });
});
