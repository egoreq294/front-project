import { screen } from '@testing-library/react';
import React from 'react';

import { UserRoleEnum } from '@entities/User';
import { componentRender } from '@shared/lib/tests/componentRender/componentRender';
import { AppRouter } from '../AppRouter';

describe('AppRouter test suite', () => {
  test('should render correctly', async () => {
    componentRender(<AppRouter />, {
      route: '/about',
    });
    const page = await screen.findByTestId('Page_About');

    expect(page).toBeInTheDocument();
  });

  test('should render NotFoundPage', async () => {
    componentRender(<AppRouter />, {
      route: '/dfgdfgfdg',
    });
    const page = await screen.findByTestId('Page_NotFound');

    expect(page).toBeInTheDocument();
  });

  test('should redirect to MainPage for unauthorized user', async () => {
    componentRender(<AppRouter />, {
      route: '/Profile/1',
    });
    const page = await screen.findByTestId('Page_Main');

    expect(page).toBeInTheDocument();
  });

  test('should render ProfilePage for authorized user', async () => {
    componentRender(<AppRouter />, {
      route: '/Profile/1',
      initialState: {
        user: {
          _inited: true,
          authData: {
            id: '1',
          },
        },
      },
    });
    const page = await screen.findByTestId('Page_Profile');

    expect(page).toBeInTheDocument();
  });

  test('should render ForbiddenPage for not admin user', async () => {
    componentRender(<AppRouter />, {
      route: '/admin',
      initialState: {
        user: {
          _inited: true,
          authData: {
            id: '1',
            roles: [UserRoleEnum.USER],
          },
        },
      },
    });
    const page = await screen.findByTestId('Page_Forbidden');

    expect(page).toBeInTheDocument();
  });

  test('should render AbminPanelPage', async () => {
    componentRender(<AppRouter />, {
      route: '/admin',
      initialState: {
        user: {
          _inited: true,
          authData: {
            id: '1',
            roles: [UserRoleEnum.ADMIN],
          },
        },
      },
    });
    const page = await screen.findByTestId('Page_AdminPanel');

    expect(page).toBeInTheDocument();
  });
});
