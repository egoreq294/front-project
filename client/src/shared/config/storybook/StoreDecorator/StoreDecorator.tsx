import { StoryFn } from '@storybook/react';
import React from 'react';

// eslint-disable-next-line egoreq-plugin/layer-imports
import { loginReducer } from '@features/AuthByUsername';
// eslint-disable-next-line egoreq-plugin/layer-imports
import { profileReducer } from '@features/EditableProfileCard';
import { ReducerList } from '@shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import {
  StateSchema,
  StoreProvider,
} from '../../../../app/providers/StoreProvider';

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
