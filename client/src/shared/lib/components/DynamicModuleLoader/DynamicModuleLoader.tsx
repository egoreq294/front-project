import { Reducer } from '@reduxjs/toolkit';
import React from 'react';
import { FC, ReactNode, useEffect } from 'react';
import { useStore } from 'react-redux';

import {
  ReduxStoreWithManager,
  StateSchema,
  StateSchemaKey,
} from '@app/providers/StoreProvider';
import { useAppDispatch } from '../../hooks/useAppDispatch';

export type ReducerList = {
  [name in StateSchemaKey]?: Reducer<NonNullable<StateSchema[name]>>;
};

export type SagasList = {
  [name in StateSchemaKey]?: () => Generator<unknown, any, unknown>;
};

export interface DynamicModuleLoaderProps {
  reducers?: ReducerList;
  sagas?: SagasList;
  removeAfterUnmount?: boolean;
  children: ReactNode;
}

export const DynamicModuleLoader: FC<DynamicModuleLoaderProps> = ({
  reducers,
  sagas,
  removeAfterUnmount = true,
  children,
}) => {
  const store = useStore() as ReduxStoreWithManager;
  const dispatch = useAppDispatch();

  useEffect(() => {
    const mountedReducers = store.reducerManager.getReducerMap();

    if (reducers) {
      Object.entries(reducers).forEach(([name, reducer]) => {
        const mounted = mountedReducers[name as StateSchemaKey];
        if (mounted) {
          return;
        }

        store.reducerManager.add(name as StateSchemaKey, reducer);
        dispatch({ type: `@INIT ${name} reducer` });
      });
    }

    return () => {
      if (removeAfterUnmount && reducers) {
        Object.entries(reducers).forEach(([name]) => {
          store.reducerManager.remove(name as StateSchemaKey);
          dispatch({ type: `@DESTROY ${name} reducer` });
        });
      }
    };
  }, []);

  useEffect(() => {
    if (sagas) {
      Object.entries(sagas).forEach(([key, saga]) => {
        store.sagaManager.add(key as StateSchemaKey, saga);
        dispatch({ type: `@INIT ${key} saga` });
      });
    }

    return () => {
      if (removeAfterUnmount && sagas) {
        Object.entries(sagas).forEach(([key]) => {
          store.sagaManager.remove(key as StateSchemaKey);
          dispatch({ type: `@DESTROY ${key} saga` });
        });
      }
    };
  }, []);

  return <>{children}</>;
};
