import { Article } from '@entities/Article';
import { rtkApi } from '@shared/api/rtkApi';
import { EditArticleInput } from '../model/types/editArticleInput';

const editArticleApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    editArticle: build.mutation<Article, EditArticleInput>({
      query: (args) => ({
        url: '/articles/update',
        method: 'PUT',
        body: args,
      }),
    }),
  }),
});

export const useEditArticle = editArticleApi.useEditArticleMutation;
