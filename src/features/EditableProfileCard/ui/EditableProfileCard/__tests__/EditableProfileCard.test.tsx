import { EditableProfileCard } from '../EditableProfileCard';
import { screen, waitFor } from '@testing-library/react';
import React from 'react';
import { componentRender } from '@shared/lib/tests/componentRender/componentRender';
import { Profile } from '@entities/Profile';
import { CurrencyEnum } from '@entities/Currency';
import { CountryEnum } from '@entities/Country';
import { profileReducer } from '../../../model/slice/profileSlice';
import userEvent from '@testing-library/user-event';
import { rest } from 'msw';
import { setupServer } from 'msw/node';

const profile: Profile = {
  id: '1',
  firstName: 'test',
  lastName: 'user',
  age: '45',
  currency: CurrencyEnum.RUB,
  country: CountryEnum.UnitedStates,
  city: 'New York',
  username: 'admin',
};

const options = {
  initialState: {
    profile: {
      readonly: true,
    },
    user: {
      authData: {
        id: '1',
      },
    },
  },
  asyncReducers: { profile: profileReducer },
};

export const handlers = [
  rest.get('/profile/1', (req, res, ctx) => {
    return res(ctx.json(profile));
  }),
  rest.put('/profile/1', (req, res, ctx) => {
    return res(ctx.json({ ...profile, firstName: 'new value' }));
  }),
];

const server = setupServer(...handlers);

beforeAll(() => server.listen());

afterEach(() => server.resetHandlers());

afterAll(() => server.close());

describe('EditableProfileCard test suite', () => {
  test('should click edit button', async () => {
    componentRender(<EditableProfileCard id="1" />, options);

    await waitFor(() =>
      expect(screen.getByTestId('ProfileCardContent')).toBeInTheDocument(),
    );

    await userEvent.click(screen.getByTestId('Button_Edit'));

    expect(screen.getByTestId('Button_Cancel')).toBeInTheDocument();
    expect(screen.getByTestId('Button_Save')).toBeInTheDocument();
  });

  test('should reset form values on cancel edit', async () => {
    componentRender(<EditableProfileCard id="1" />, options);

    await waitFor(() =>
      expect(screen.getByTestId('ProfileCardContent')).toBeInTheDocument(),
    );

    await userEvent.click(screen.getByTestId('Button_Edit'));

    await userEvent.clear(screen.getByTestId('Input_FirstName'));
    await userEvent.clear(screen.getByTestId('Input_LastName'));

    expect(screen.getByTestId('Input_FirstName')).toHaveValue('');
    expect(screen.getByTestId('Input_LastName')).toHaveValue('');

    await userEvent.type(screen.getByTestId('Input_FirstName'), 'new value');
    await userEvent.type(screen.getByTestId('Input_LastName'), 'new value');

    expect(screen.getByTestId('Input_FirstName')).toHaveValue('new value');
    expect(screen.getByTestId('Input_LastName')).toHaveValue('new value');

    await userEvent.click(screen.getByTestId('Button_Cancel'));

    expect(screen.getByTestId('Input_FirstName')).toHaveValue(
      profile.firstName,
    );
    expect(screen.getByTestId('Input_LastName')).toHaveValue(profile.lastName);
  });

  test('should have validation error', async () => {
    componentRender(<EditableProfileCard id="1" />, options);

    await waitFor(() =>
      expect(screen.getByTestId('ProfileCardContent')).toBeInTheDocument(),
    );

    await userEvent.click(screen.getByTestId('Button_Edit'));

    await userEvent.clear(screen.getByTestId('Input_FirstName'));

    expect(screen.getByTestId('Input_FirstName')).toHaveValue('');

    await userEvent.click(screen.getByTestId('Button_Save'));

    expect(screen.getByTestId('Typography_Error')).toBeInTheDocument();
  });

  test('should save profile', async () => {
    componentRender(<EditableProfileCard id="1" />, options);

    await waitFor(() =>
      expect(screen.getByTestId('ProfileCardContent')).toBeInTheDocument(),
    );

    await userEvent.click(screen.getByTestId('Button_Edit'));

    await userEvent.clear(screen.getByTestId('Input_FirstName'));

    expect(screen.getByTestId('Input_FirstName')).toHaveValue('');

    await userEvent.type(screen.getByTestId('Input_FirstName'), 'new value');

    expect(screen.getByTestId('Input_FirstName')).toHaveValue('new value');

    await userEvent.click(screen.getByTestId('Button_Save'));

    await waitFor(() => userEvent.click(screen.getByTestId('Button_Edit')));

    expect(screen.getByTestId('Input_FirstName')).toHaveValue('new value');
  });
});