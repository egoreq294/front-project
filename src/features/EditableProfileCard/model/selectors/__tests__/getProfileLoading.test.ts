import { StateSchema } from '@app/providers/StoreProvider';
import { getProfileLoading } from '../getProfileLoading';

describe('getProfileLoading test suite', () => {
  test('should return profile loading', () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        loading: true,
      },
    };

    expect(getProfileLoading(state as StateSchema)).toEqual(true);
  });

  test('should return false', () => {
    const state: DeepPartial<StateSchema> = {};

    expect(getProfileLoading(state as StateSchema)).toEqual(false);
  });
});
