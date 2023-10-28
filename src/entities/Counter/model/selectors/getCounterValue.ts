import { createSelector } from '@reduxjs/toolkit';

import { CounterSchema } from '../types/CounterSchema';
import { getCounter } from './getCounter';

export const getCounterValue = createSelector(
  getCounter,
  (counter: CounterSchema): number => counter.value,
);
