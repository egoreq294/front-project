describe('Страница со списком статей', () => {
  it('Статьи успешно загрузились', () => {
    cy.visit('/');
    cy.getByTestId('ArticleList').should('exist');
    cy.getByTestId('ArticleListItem').should('have.length.greaterThan', 2);
  });
});
