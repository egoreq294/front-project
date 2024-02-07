import { Article } from '@entities/Article';
import { rtkApi } from '@shared/api/rtkApi';
import { CreateArticleInput } from '../model/types/createArticleInput';

const createArticleApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    createArticle: build.mutation<Article, CreateArticleInput>({
      query: (args) => ({
        url: '/articles/create',
        method: 'POST',
        body: args,
      }),
    }),
  }),
});

export const useCreateArticle = createArticleApi.useCreateArticleMutation;
