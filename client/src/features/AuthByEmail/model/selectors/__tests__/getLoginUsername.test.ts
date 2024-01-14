import { StateSchema } from '@app/providers/StoreProvider';
import { getLoginEmail } from '../getLoginEmail';

describe('getLoginEmail test suite', () => {
  test('should return login username', () => {
    const state: DeepPartial<StateSchema> = {
      loginForm: { email: 'test@test.test', password: '123', isLoading: false },
    };

    expect(getLoginEmail(state as StateSchema)).toEqual('test@test.test');
  });

  test('should return empty string', () => {
    const state: DeepPartial<StateSchema> = {};

    expect(getLoginEmail(state as StateSchema)).toEqual('');
  });
});
