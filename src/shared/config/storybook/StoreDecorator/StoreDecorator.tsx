import React from 'react';
import { StoryFn } from '@storybook/react';
import {
  StateSchema,
  StoreProvider,
} from '../../../../app/providers/StorePovider';
import { DeepPartial, ReducersMapObject } from '@reduxjs/toolkit';
import { loginReducer } from '@features/AuthByUsername/model/slice/loginSlice';
import { profileReducer } from '@entities/Profile';

const DEFAULT_ASYNC_REDUCERS: DeepPartial<ReducersMapObject<StateSchema>> = {
  loginForm: loginReducer,
  profile: profileReducer,
};

export const StoreDecorator =
  (
    state: DeepPartial<StateSchema>,
    asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>,
  ): ((StoryComponent: StoryFn) => JSX.Element) =>
  // eslint-disable-next-line react/display-name
  (StoryComponent: StoryFn): JSX.Element =>
    (
      <StoreProvider
        initialState={state as StateSchema}
        asyncReducers={{ ...DEFAULT_ASYNC_REDUCERS, ...asyncReducers }}
      >
        <StoryComponent />
      </StoreProvider>
    );
