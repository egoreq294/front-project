describe('Редактирование профиля', () => {
  let profileId: string = '';

  beforeEach(() => {
    cy.login().then((data) => {
      profileId = data.id;
      cy.visit(`/profile/${profileId}`);
    });
  });

  afterEach(() => {
    cy.resetProfile(profileId);
  });

  it('Профиль успешно загрузился', () => {
    cy.getByTestId('Input_FirstName').should('have.value', 'Тестовый');
    cy.getByTestId('Input_LastName').should('have.value', 'Пользователь');
  });

  it('Редактируем профиль', () => {
    cy.updateProfile({
      firstName: 'Новый тестовый',
      lastName: 'Новый пользователь',
    });
    cy.getByTestId('Input_FirstName').should('have.value', 'Новый тестовый');
    cy.getByTestId('Input_LastName').should('have.value', 'Новый пользователь');
  });
});
