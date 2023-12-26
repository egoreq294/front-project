import { useSelector } from 'react-redux';

import { StateSchema } from '@app/providers/StoreProvider';

type Selector<T, Args extends any[]> = (state: StateSchema, ...args: Args) => T;
type Hook<T, Args extends any[]> = (...args: Args) => T;

type BuildSelectorResult<T, Args extends any[]> = [
  Hook<T, Args>,
  Selector<T, Args>,
];

export const buildSelector = <T, Args extends any[]>(
  selector: Selector<T, Args>,
): BuildSelectorResult<T, Args> => {
  const useSelectorHook: Hook<T, Args> = (...args) => {
    return useSelector((state: StateSchema) => selector(state, ...args));
  };

  return [useSelectorHook, selector];
};
