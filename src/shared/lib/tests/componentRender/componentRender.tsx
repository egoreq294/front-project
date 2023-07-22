import { render, RenderResult } from '@testing-library/react';
import React, { ReactNode } from 'react';
import { I18nextProvider } from 'react-i18next';
import { MemoryRouter } from 'react-router-dom';
import i18nForTest from '@shared/config/i18n/i18nForTest';
import { StateSchema, StoreProvider } from '@app/providers/StorePovider';

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
    <MemoryRouter initialEntries={[route]}>
      <StoreProvider initialState={initialState as StateSchema}>
        <I18nextProvider i18n={i18nForTest}>{component}</I18nextProvider>
      </StoreProvider>
    </MemoryRouter>,
  );
};
