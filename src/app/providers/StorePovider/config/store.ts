import { configureStore } from '@reduxjs/toolkit';
import { ToolkitStore } from '@reduxjs/toolkit/dist/configureStore';
import { StateSchema } from './StateSchema';
import { counterReducer } from '@entities/Counter';

export const createReduxStore = (initialState?: StateSchema): ToolkitStore => {
  return configureStore<StateSchema>({
    reducer: {
      counter: counterReducer,
    },
    devTools: __IS_DEV__,
    preloadedState: initialState,
  });
};
