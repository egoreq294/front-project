import { useSelector } from 'react-redux';

import { StateSchema } from '@app/providers/StoreProvider';

type Selector<T> = (state: StateSchema) => T;

type BuildSelectorResult<T> = [() => T, Selector<T>];

export const buildSelector = <T>(
  selector: Selector<T>,
): BuildSelectorResult<T> => {
  const useSelectorHook = (): T => {
    return useSelector(selector);
  };

  return [useSelectorHook, selector];
};
