import { rtkNewApi } from '@shared/api/rtkApi';
import { ArticleRateActionEnum } from '../model/constants/article';
import { Article } from '../model/types/article';

export type RateArticleProps = {
  action: ArticleRateActionEnum;
  articleId: string;
};

const articleRatingApi = rtkNewApi.injectEndpoints({
  endpoints: (build) => ({
    rateArticle: build.mutation<Article, RateArticleProps>({
      query: (args) => ({
        url: '/article/rate',
        method: 'POST',
        body: args,
      }),
    }),
  }),
});

export const useRateArticle = articleRatingApi.useRateArticleMutation;

export const rateArticleMutation =
  articleRatingApi.endpoints.rateArticle.initiate;
