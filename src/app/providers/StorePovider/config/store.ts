import { ReducersMapObject, configureStore } from '@reduxjs/toolkit';
import { ToolkitStore } from '@reduxjs/toolkit/dist/configureStore';
import { StateSchema } from './StateSchema';
import { counterReducer } from '@entities/Counter';
import { userReducer } from '@entities/User';
import { loginReducer } from '@features/AuthByUsername';

export const createReduxStore = (initialState?: StateSchema): ToolkitStore => {
  const rootReducers: ReducersMapObject<StateSchema> = {
    counter: counterReducer,
    user: userReducer,
    loginForm: loginReducer,
  };

  return configureStore<StateSchema>({
    reducer: rootReducers,
    devTools: __IS_DEV__,
    preloadedState: initialState,
  });
};
