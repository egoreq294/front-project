import {
  CombinedState,
  configureStore,
  Reducer,
  ReducersMapObject,
} from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';

import { counterReducer } from '@entities/Counter';
import { userReducer } from '@entities/User';
import { scrollReducer } from '@features/Scroll';
import { $api } from '@shared/api/api';
import { rtkApi } from '@shared/api/rtkApi';
import { popupReducer } from '@shared/lib/popups/popupSlice';
import { createReducerManager } from './reducerManager';
import { rootSaga } from './rootSaga';
import { createSagaManager } from './sagaManager';
import { StateSchema, ThunkExtraArg } from './StateSchema';

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const createReduxStore = (
  initialState?: StateSchema,
  asyncReducers?: ReducersMapObject<StateSchema>,
) => {
  const rootReducers: ReducersMapObject<StateSchema> = {
    ...asyncReducers,
    counter: counterReducer,
    user: userReducer,
    scroll: scrollReducer,
    popup: popupReducer,
    [rtkApi.reducerPath]: rtkApi.reducer,
  };

  const reducerManager = createReducerManager(rootReducers);

  const sagaMiddleware = createSagaMiddleware();

  const extraArg: ThunkExtraArg = {
    api: $api,
  };

  const store = configureStore({
    reducer: reducerManager.reduce as Reducer<CombinedState<StateSchema>>,
    devTools: __IS_DEV__,
    preloadedState: initialState,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        thunk: {
          extraArgument: extraArg,
        },
      }).concat(rtkApi.middleware, sagaMiddleware),
  });

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  store.sagaManager = createSagaManager(sagaMiddleware.run, rootSaga);

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  store.reducerManager = reducerManager;

  return store;
};

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];
