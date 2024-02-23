import { Article } from '../../../src/entities/Article';
import { CommentType } from '../../../src/entities/Comment';

const DEFAULT_ARTICLE = {
  title: 'Golang news',
  subtitle: 'Что нового в JS за 2022 год?',
  image:
    'https://bestprogrammer.ru/wp-content/uploads/2022/03/Vyzov-Golang-696x400.jpg',
  type: ['IT'],
  blocks: [],
};

export const createArticle = (article?: Article) => {
  return cy
    .request({
      method: 'POST',
      url: `http://localhost:5000/api/articles/create`,
      headers: {
        Authorization: `Bearer ${window.localStorage.getItem('access_token')}`,
      },
      body: article || DEFAULT_ARTICLE,
    })
    .then(({ body }) => body);
};

export const removeArticle = (articleId: string) => {
  return cy.request({
    method: 'DELETE',
    url: `http://localhost:5000/api/articles/${articleId}`,
    headers: {
      Authorization: `Bearer ${window.localStorage.getItem('access_token')}`,
    },
  });
};

export const getArticleComments = (articleId: string) => {
  return cy
    .request({
      method: 'GET',
      url: `http://localhost:5000/api/articles/${articleId}/comments`,
      headers: {
        Authorization: `Bearer ${window.localStorage.getItem('access_token')}`,
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
