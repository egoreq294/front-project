import { StateSchema } from '@app/providers/StoreProvider';
import { getProfileError } from '../getProfileError';

describe('getProfileError test suite', () => {
  test('should return profile error', () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        error: 'error',
      },
    };

    expect(getProfileError(state as StateSchema)).toEqual('error');
  });

  test('should return null', () => {
    const state: DeepPartial<StateSchema> = {};

    expect(getProfileError(state as StateSchema)).toEqual(null);
  });
});
