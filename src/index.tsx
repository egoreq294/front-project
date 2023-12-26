import '@shared/config/i18n/i18n';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import { ConfigProvider } from '@app/providers/ConfigProvider';
import { ErrorBoundary } from '@app/providers/ErrorBoundary';
import { StoreProvider } from '@app/providers/StoreProvider';
import { ThemeProvider } from '@app/providers/ThemeProvider';
import { App } from './app/App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <StoreProvider>
        <ConfigProvider>
          <ErrorBoundary>
            <ThemeProvider>
              <App />
            </ThemeProvider>
          </ErrorBoundary>
        </ConfigProvider>
      </StoreProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
