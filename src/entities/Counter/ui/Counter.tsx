import React, { FC } from 'react';

import { Button } from '@shared/ui/Button';
import { useCounterValue } from '../model/selectors/getCounterValue';
import { useCounterActions } from '../model/slice/counterSlice';

export const Counter: FC = () => {
  const counterValue = useCounterValue();

  const { increment, decrement } = useCounterActions();

  const handleIncrement = (): void => {
    increment();
  };
  const handleDecrement = (): void => {
    decrement();
  };

  return (
    <div data-testid="counter">
      <h1 data-testid="counter-value">{counterValue}</h1>
      <Button data-testid="increment-button" onClick={handleIncrement}>
        +
      </Button>
      <Button data-testid="decrement-button" onClick={handleDecrement}>
        -
      </Button>
    </div>
  );
};
