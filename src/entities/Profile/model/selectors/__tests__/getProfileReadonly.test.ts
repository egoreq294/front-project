import { StateSchema } from '@app/providers/StorePovider';
import { getProfileReadonly } from '../getProfileReadonly';

describe('getProfileReadonly test suite', () => {
  test('should return profile readonly', () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        readonly: true,
      },
    };

    expect(getProfileReadonly(state as StateSchema)).toEqual(true);
  });

  test('should return false', () => {
    const state: DeepPartial<StateSchema> = {};

    expect(getProfileReadonly(state as StateSchema)).toEqual(false);
  });
});
