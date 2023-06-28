import { render, RenderResult } from '@testing-library/react';
import React, { ReactNode } from 'react';
import { I18nextProvider } from 'react-i18next';
import { MemoryRouter } from 'react-router-dom';
import i18nForTest from '@shared/config/i18n/i18nForTest';
import { StateSchema, StoreProvider } from '@app/providers/StorePovider';
import { DeepPartial } from '@reduxjs/toolkit';

export type ComponentRenderOptions = {
  route?: string;
  initialState?: DeepPartial<StateSchema>;
};

export const componentRender = (
  component: ReactNode,
  options: ComponentRenderOptions = {},
): RenderResult => {
  const { route = '/', initialState } = options;

  return render(
    <StoreProvider initialState={initialState as StateSchema}>
      <MemoryRouter initialEntries={[route]}>
        <I18nextProvider i18n={i18nForTest}>{component}</I18nextProvider>
      </MemoryRouter>
    </StoreProvider>,
  );
};
