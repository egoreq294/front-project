import { RatingModel } from "../../models/Article";

export type RatingDTO = {
  value: number;
  canRateArticle: boolean;
};

export const getRatingDTO = (
  ratingModel: InstanceType<typeof RatingModel>,
  canRateArticle?: boolean
): RatingDTO => {
  return {
    value: ratingModel.rating,
    canRateArticle: !!canRateArticle,
  };
};
