import { Button } from '@shared/ui/Button/Button';
import React, { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { counterActions } from '../model/slice/counterSlice';
import { getCounterValue } from '../model/selectors/getCounterValue';

export const Counter: FC = () => {
  const dispatch = useDispatch();
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
