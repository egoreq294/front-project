import { StateSchema } from '@app/providers/StoreProvider';
import { getAuthEmail } from '../getAuthEmail';

describe('getAuthEmail test suite', () => {
  test('should return login username', () => {
    const state: DeepPartial<StateSchema> = {
      authForm: { email: 'test@test.test', password: '123', isLoading: false },
    };

    expect(getAuthEmail(state as StateSchema)).toEqual('test@test.test');
  });

  test('should return empty string', () => {
    const state: DeepPartial<StateSchema> = {};

    expect(getAuthEmail(state as StateSchema)).toEqual('');
  });
});
