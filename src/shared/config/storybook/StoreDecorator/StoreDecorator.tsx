import React from 'react';
import { StoryFn } from '@storybook/react';
import {
  StateSchema,
  StoreProvider,
} from '../../../../app/providers/StorePovider';
import { loginReducer } from '@features/AuthByUsername/model/slice/loginSlice';
import { profileReducer } from '@features/EditableProfileCard';
import { ReducerList } from '@shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';

const DEFAULT_ASYNC_REDUCERS: ReducerList = {
  loginForm: loginReducer,
  profile: profileReducer,
};

export const StoreDecorator =
  (
    state: DeepPartial<StateSchema>,
    asyncReducers?: ReducerList,
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
