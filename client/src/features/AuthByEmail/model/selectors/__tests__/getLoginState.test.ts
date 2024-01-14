import { StateSchema } from '@app/providers/StoreProvider';
import { getLoginState } from '../getLoginState';

describe('getLoginState test suite', () => {
  test('should return login state', () => {
    const state: DeepPartial<StateSchema> = {
      loginForm: { email: 'test@test.test', password: '123', isLoading: false },
    };

    expect(getLoginState(state as StateSchema)).toEqual({
      email: 'test@test.test',
      password: '123',
      isLoading: false,
    });
  });
});
