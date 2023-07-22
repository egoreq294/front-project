import { StateSchema } from '@app/providers/StorePovider';
import { getLoginState } from '../getLoginState';

describe('getLoginState test suite', () => {
  test('should return login state', () => {
    const state: DeepPartial<StateSchema> = {
      loginForm: { username: 'test', password: '123', isLoading: false },
    };

    expect(getLoginState(state as StateSchema)).toEqual({
      username: 'test',
      password: '123',
      isLoading: false,
    });
  });
});
