import { Profile } from '../../../src/entities/Profile';

export const updateProfile = (profile: Profile) => {
  cy.getByTestId('Button_Edit').click();
  cy.getByTestId('Input_FirstName').clear().type(profile.firstName);
  cy.getByTestId('Input_LastName').clear().type(profile.lastName);
  cy.getByTestId('Button_Save').click();
};

export const resetProfile = () => {
  return cy.request({
    method: 'PUT',
    url: `http://localhost:5000/api/profiles/update`,
    headers: {
      Authorization: `Bearer ${window.localStorage.getItem('access_token')}`,
    },
    body: {
      firstName: 'Пользователь',
      lastName: 'Тестовый',
      age: '99',
      country: 'Russia',
      city: 'Москва',
      currency: 'RUB',
      avatar: 'http://www.lookmi.ru/cartoons/draw-shrek.jpg',
    },
  });
};

declare global {
  namespace Cypress {
    interface Chainable {
      updateProfile(profile: Profile): Chainable<void>;
      resetProfile(): Chainable<void>;
    }
  }
}
