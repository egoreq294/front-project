let currentArticleId: string = '';

describe('Страница статьи', () => {
  beforeEach(() => {
    cy.login().then(() => {
      cy.createArticle().then((article) => {
        currentArticleId = article.id;
        cy.visit(`articles/${currentArticleId}`);
      });
    });
  });

  afterEach(() => {
    cy.removeArticle(currentArticleId);
  });

  it('Просмотр содержимого статьи', () => {
    cy.getByTestId('Typography_ArticleDetailsTitle').should('exist');
  });

  it('Просмотр рекоммендаций', () => {
    cy.getByTestId('ArticleRecommendationsList').should('exist');
  });

  it('Оставляем комментарий', () => {
    cy.getByTestId('Typography_ArticleDetailsTitle').should('exist');
    cy.getByTestId('CommentForm').scrollIntoView();
    cy.addComment('New Comment');

    cy.wait(2000);

    cy.getArticleComments(currentArticleId).then((comments) => {
      comments.forEach(({ id, text }) => {
        cy.getByTestId(`Typography_Comment${id}`).should('have.text', text);
      });
    });
  });

  it('Оцениваем статью', () => {
    cy.getByTestId('Typography_ArticleDetailsTitle').should('exist');
    cy.getByTestId('Typography_Rating').should('have.text', '0');
    const likeButton = cy.getByTestId('IconButton_Like');
    likeButton.scrollIntoView();
    likeButton.click();
    cy.wait(2000);
    cy.getByTestId('Typography_Rating').should('have.text', '1');
  });
});
