import { StateSchema } from '@app/providers/StorePovider';
import { getCounter } from '../getCounter';

describe('getCounter test suite', () => {
  test('should return counter state', () => {
    const state: DeepPartial<StateSchema> = {
      counter: { value: 10 },
    };

    expect(getCounter(state as StateSchema)).toEqual({ value: 10 });
  });
});
