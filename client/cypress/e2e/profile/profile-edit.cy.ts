describe('Редактирование профиля', () => {
  let profileId: string = '';

  beforeEach(() => {
    cy.login().then((data) => {
      profileId = data.profile.id;
      cy.visit(`/profile/${profileId}`);
    });
  });

  afterEach(() => {
    cy.resetProfile();
  });

  it('Профиль успешно загрузился', () => {
    cy.getByTestId('Input_FirstName').should('have.value', 'Пользователь');
    cy.getByTestId('Input_LastName').should('have.value', 'Тестовый');
  });

  it('Редактируем профиль', () => {
    cy.updateProfile({
      firstName: 'Новый пользователь',
      lastName: 'Новый тестовый',
    });
    cy.getByTestId('Input_FirstName').should(
      'have.value',
      'Новый пользователь',
    );
    cy.getByTestId('Input_LastName').should('have.value', 'Новый тестовый');
  });
});
