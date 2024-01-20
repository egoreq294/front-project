import { Article } from '@entities/Article';
import { rtkNewApi } from '@shared/api/rtkApi';

const recommendationsApi = rtkNewApi.injectEndpoints({
  endpoints: (build) => ({
    getArticleRecommendationsList: build.query<Article[], number>({
      query: (limit) => ({
        url: '/article',
        params: {
          _page: 0,
          _limit: limit,
          _expand: 'profile',
        },
      }),
    }),
  }),
});

export const useArticleRecommendationsList =
  recommendationsApi.useGetArticleRecommendationsListQuery;
