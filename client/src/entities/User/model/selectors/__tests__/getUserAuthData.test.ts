import { StateSchema } from '@app/providers/StoreProvider';
import { getUserAuthData } from '../getUserAuthData';

describe('getUserAuthData test suite', () => {
  test('should return auth data state', () => {
    const state: DeepPartial<StateSchema> = {
      user: {
        authData: {
          username: 'test test test',
          id: '1',
        },
      },
    };

    expect(getUserAuthData(state as StateSchema)).toEqual({
      username: 'test test test',
      id: '1',
    });
  });
});
