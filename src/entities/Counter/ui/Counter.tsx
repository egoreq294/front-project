import React, { FC } from 'react';
import { useSelector } from 'react-redux';

import { useAppDispatch } from '@shared/lib/hooks/useAppDispatch';
import { Button } from '@shared/ui/Button/Button';
import { getCounterValue } from '../model/selectors/getCounterValue';
import { counterActions } from '../model/slice/counterSlice';

export const Counter: FC = () => {
  const dispatch = useAppDispatch();
  const counterValue = useSelector(getCounterValue);

  const increment = (): void => {
    dispatch(counterActions.increment());
  };
  const decrement = (): void => {
    dispatch(counterActions.decrement());
  };
  return (
    <div data-testid="counter">
      <h1 data-testid="counter-value">{counterValue}</h1>
      <Button data-testid="increment-button" onClick={increment}>
        +
      </Button>
      <Button data-testid="decrement-button" onClick={decrement}>
        -
      </Button>
    </div>
  );
};
