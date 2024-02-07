import { ArticleModel } from "../../models/Article";

export type RatingDTO = {
  value: number;
  canRateArticle: boolean;
};

export const getRatingDTO = (
  articleModel: InstanceType<typeof ArticleModel>,
  canRateArticle?: boolean
): RatingDTO => {
  return {
    value: articleModel.rating.rating,
    canRateArticle: !!canRateArticle,
  };
};
