import { Rating } from '@entities/Rating';
import { rtkApi } from '@shared/api/rtkApi';

type GetArtivleRatingProps = { userId: string; articleId: string };
type RateArticleProps = {
  userId: string;
  articleId: string;
  feedback?: string;
  rate: number;
};

const articleRatingApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    getArticleRating: build.query<Rating[], GetArtivleRatingProps>({
      query: ({ userId, articleId }) => ({
        url: '/article-ratings',
        params: {
          userId,
          articleId,
        },
      }),
    }),
    rateArticle: build.mutation<void, RateArticleProps>({
      query: (args) => ({
        url: '/article-ratings',
        method: 'POST',
        body: args,
      }),
    }),
  }),
});

export const useArticleRating = articleRatingApi.useGetArticleRatingQuery;
export const useRateArticle = articleRatingApi.useRateArticleMutation;
