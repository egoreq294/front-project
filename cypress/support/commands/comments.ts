export const addComment = (comment?: string) => {
  cy.getByTestId('Input_Comment').type(comment);
  cy.getByTestId('IconButton_Send').click();
};

declare global {
  namespace Cypress {
    interface Chainable {
      addComment(comment: string): Chainable<void>;
    }
  }
}
