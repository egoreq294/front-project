export const setRating = (rating: number, feedback: string) => {
  cy.getByTestId(`StarRating_${rating}`).click();
  cy.getByTestId('Input_Feedback').type(feedback);
  cy.getByTestId('Button_SendFeedback').click();
};

declare global {
  namespace Cypress {
    interface Chainable {
      setRating(rating: number, feedback: string): Chainable<void>;
    }
  }
}
