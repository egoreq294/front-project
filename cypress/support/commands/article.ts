import { Article } from '../../../src/entities/Article';
import { CommentType } from '../../../src/entities/Comment';

const DEFAULT_ARTICLE = {
  title: 'Golang news',
  subtitle: 'Что нового в JS за 2022 год?',
  img: 'https://bestprogrammer.ru/wp-content/uploads/2022/03/Vyzov-Golang-696x400.jpg',
  views: 10222,
  createdAt: '26.02.2020',
  userId: '1',
  type: ['IT'],
  blocks: [],
};

export const createArticle = (article?: Article) => {
  return cy
    .request({
      method: 'POST',
      url: `http://localhost:8000/articles`,
      headers: {
        Authorization: 'token',
      },
      body: article || DEFAULT_ARTICLE,
    })
    .then(({ body }) => body);
};

export const removeArticle = (articleId: string) => {
  return cy.request({
    method: 'DELETE',
    url: `http://localhost:8000/articles/${articleId}`,
    headers: {
      Authorization: 'token',
    },
  });
};

export const getArticleComments = (articleId: string) => {
  return cy
    .request({
      method: 'GET',
      url: `http://localhost:8000/comments?articleId=${articleId}`,
      headers: {
        Authorization: 'token',
      },
    })
    .then(({ body }) => body);
};

declare global {
  namespace Cypress {
    interface Chainable {
      createArticle(article?: Article): Chainable<Article>;
      removeArticle(articleId: string): Chainable<void>;
      getArticleComments(articleId: string): Chainable<CommentType[]>;
    }
  }
}
