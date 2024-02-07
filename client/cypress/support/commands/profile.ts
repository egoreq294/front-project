import { Profile } from '../../../src/entities/Profile';

export const updateProfile = (profile: Profile) => {
  cy.getByTestId('Button_Edit').click();
  cy.getByTestId('Input_FirstName').clear().type(profile.firstName);
  cy.getByTestId('Input_LastName').clear().type(profile.lastName);
  cy.getByTestId('Button_Save').click();
};

export const resetProfile = (profileId: string) => {
  return cy.request({
    method: 'PUT',
    url: `http://localhost:5000/api/profile/${profileId}`,
    headers: {
      Authorization: 'token',
    },
    body: {
      id: profileId,
      firstName: 'Тестовый',
      lastName: 'Пользователь',
      age: '35',
      country: 'UnitedStates',
      city: 'Томск',
      username: 'user',
      currency: 'USD',
      avatar: 'http://www.lookmi.ru/cartoons/draw-shrek.jpg',
    },
  });
};

declare global {
  namespace Cypress {
    interface Chainable {
      updateProfile(profile: Profile): Chainable<void>;
      resetProfile(profileId: string): Chainable<void>;
    }
  }
}
