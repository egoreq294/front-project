import { StoryFn } from '@storybook/react';
import React from 'react';

import { loginReducer } from '@features/AuthByUsername';
import { profileReducer } from '@features/EditableProfileCard';
import { ReducerList } from '@shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import {
  StateSchema,
  StoreProvider,
} from '../../../../app/providers/StorePovider';

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
