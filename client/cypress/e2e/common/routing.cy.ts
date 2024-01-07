import { selectByTestId } from '../../helpers/selectByTestId';

describe('Роутинг', () => {
  describe('Пользователь не авторизован', () => {
    it('Переход на гланую страницу', () => {
      cy.visit('/');
      cy.get(selectByTestId('Page_Main')).should('exist');
    });

    it('Переход на страницу пользователя', () => {
      cy.visit('/profile/1');
      cy.get(selectByTestId('Page_Main')).should('exist');
    });

    it('Переход на несуществующий маршрут', () => {
      cy.visit('/4534534');
      cy.get(selectByTestId('Page_NotFound')).should('exist');
    });
  });

  describe('Пользователь авторизован', () => {
    it('Переход на страницу пользователя', () => {
      cy.login('admin', '123');
      cy.visit('/profile/1');
      cy.get(selectByTestId('Page_Profile')).should('exist');
    });

    it('Переход на страницу статей', () => {
      cy.login('admin', '123');
      cy.visit('/articles');
      cy.get(selectByTestId('Page_Articles')).should('exist');
    });
  });
});
