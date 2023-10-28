import { CounterSchema } from '../../types/CounterSchema';
import { counterActions, counterReducer } from '../counterSlice';

describe('counterSlice test suite', () => {
  test('should return incremented counter state', () => {
    const state: CounterSchema = {
      value: 10,
    };

    expect(counterReducer(state, counterActions.increment())).toEqual({
      value: 11,
    });
  });

  test('should return decremented counter state', () => {
    const state: CounterSchema = {
      value: 10,
    };

    expect(counterReducer(state, counterActions.decrement())).toEqual({
      value: 9,
    });
  });

  test('should return incremented initial counter state', () => {
    expect(counterReducer(undefined, counterActions.increment())).toEqual({
      value: 1,
    });
  });
});
