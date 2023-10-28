import { ReducersMapObject } from '@reduxjs/toolkit';
import { render, RenderResult } from '@testing-library/react';
import React, { ReactNode } from 'react';
import { I18nextProvider } from 'react-i18next';
import { MemoryRouter } from 'react-router-dom';

import { StateSchema, StoreProvider } from '@app/providers/StorePovider';
import i18nForTest from '@shared/config/i18n/i18nForTest';

export type ComponentRenderOptions = {
  route?: string;
  initialState?: DeepPartial<StateSchema>;
  asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>;
};

export const componentRender = (
  component: ReactNode,
  options: ComponentRenderOptions = {},
): RenderResult => {
  const { route = '/', initialState, asyncReducers } = options;

  return render(
    <MemoryRouter initialEntries={[route]}>
      <StoreProvider
        asyncReducers={asyncReducers}
        initialState={initialState as StateSchema}
      >
        <I18nextProvider i18n={i18nForTest}>{component}</I18nextProvider>
      </StoreProvider>
    </MemoryRouter>,
  );
};
