import { StateSchema } from '@app/providers/StoreProvider';
import { getAuthState } from '../getAuthState';

describe('getAuthState test suite', () => {
  test('should return login state', () => {
    const state: DeepPartial<StateSchema> = {
      authForm: { email: 'test@test.test', password: '123', isLoading: false },
    };

    expect(getAuthState(state as StateSchema)).toEqual({
      email: 'test@test.test',
      password: '123',
      isLoading: false,
    });
  });
});
