import { StateSchema } from '@app/providers/StorePovider';
import { CounterSchema } from '../types/CounterSchema';

export const getCounter = (state: StateSchema): CounterSchema => state.counter;
