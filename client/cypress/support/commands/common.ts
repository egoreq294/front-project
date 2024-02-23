import { User } from '../../../src/entities/User';
import { selectByTestId } from '../../helpers/selectByTestId';

export const login = (
  email: string = 'testuser@mail.ru',
  password: string = '12345678',
) => {
  return cy
    .request({
      method: 'POST',
      url: `http://localhost:5000/api/login`,
      body: {
        email,
        password,
      },
    })
    .then(({ body }) => {
      window.localStorage.setItem('user', body.user.id);
      window.localStorage.setItem('access_token', body.accessToken);

      return body.user;
    });
};

export const getByTestId = (testId: string) => {
  return cy.get(selectByTestId(testId));
};

declare global {
  namespace Cypress {
    interface Chainable {
      login(email?: string, password?: string): Chainable<User>;
      getByTestId(testId: string): ReturnType<typeof cy.get>;
    }
  }
}
