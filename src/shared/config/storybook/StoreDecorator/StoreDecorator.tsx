import React from 'react';
import { StoryFn } from '@storybook/react';
import {
  StateSchema,
  StoreProvider,
} from '../../../../app/providers/StorePovider';
import { DeepPartial } from '@reduxjs/toolkit';

export const StoreDecorator =
  (
    state: DeepPartial<StateSchema>,
  ): ((StoryComponent: StoryFn) => JSX.Element) =>
  // eslint-disable-next-line react/display-name
  (StoryComponent: StoryFn): JSX.Element =>
    (
      <StoreProvider initialState={state as StateSchema}>
        <StoryComponent />
      </StoreProvider>
    );
