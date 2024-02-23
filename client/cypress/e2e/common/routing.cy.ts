import { selectByTestId } from '../../helpers/selectByTestId';

describe('Роутинг', () => {
  describe('Пользователь не авторизован', () => {
    it('Переход на гланую страницу', () => {
      cy.visit('/');
      cy.get(selectByTestId('Page_Articles')).should('exist');
    });

    it('Переход на несуществующий маршрут', () => {
      cy.visit('/4534534');
      cy.get(selectByTestId('Page_NotFound')).should('exist');
    });

    it('Переход на запрещенный маршрут', () => {
      cy.visit('/admin');
      cy.get(selectByTestId('Page_Forbidden')).should('exist');
    });
  });

  describe('Пользователь авторизован', () => {
    it('Переход на страницу пользователя', () => {
      cy.login().then((data) => {
        const profileId = data.profile.id;
        cy.visit(`/profile/${profileId}`);
        cy.get(selectByTestId('Page_Profile')).should('exist');
      });
    });
  });
});
