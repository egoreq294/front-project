import {
  bindActionCreators,
  CaseReducerActions,
  createSlice,
  CreateSliceOptions,
  Slice,
  SliceCaseReducers,
} from '@reduxjs/toolkit';
import { useMemo } from 'react';

import { useAppDispatch } from '../hooks/useAppDispatch';

type BuildSliceResult<
  State,
  CaseReducers extends SliceCaseReducers<State>,
  Name extends string = string,
> = Slice<State, CaseReducers, Name> & {
  useActions: () => CaseReducerActions<CaseReducers>;
};

export const buildSlice = <
  State,
  CaseReducers extends SliceCaseReducers<State>,
  Name extends string = string,
>(
  options: CreateSliceOptions<State, CaseReducers, Name>,
): BuildSliceResult<State, CaseReducers, Name> => {
  const slice = createSlice(options);

  const useActions = (): typeof slice.actions => {
    const dispatch = useAppDispatch();

    return useMemo(
      () => bindActionCreators<any, any>(slice.actions, dispatch),
      [dispatch],
    );
  };

  return {
    ...slice,
    useActions,
  };
};
