import { ArticleModel } from "../../models/Article";
import { RatingActionEnum } from "../../types/article";
import { ApiError } from "../../exceptions";
import { ObjectId } from "mongodb";
import { canRateArticle } from "./canRateArticle";
import { getArticleById } from "./getArticleById";

type RateArticleByIdArgs = {
  profileId: ObjectId | string;
  articleId: ObjectId | string;
  action: RatingActionEnum;
};

export const rateArticleById = async (args: RateArticleByIdArgs) => {
  const { articleId, profileId, action } = args;

  const article = await getArticleById(articleId);

  const canRate = await canRateArticle({ articleId, profileId });

  if (!canRate) {
    throw ApiError.BadRequest("Вы уже оценивали эту статью");
  }

  const updatedRating =
    action === RatingActionEnum.LIKE
      ? article.rating.rating + 1
      : article.rating.rating - 1;

  const updatedArticle = await ArticleModel.findOneAndUpdate(
    {
      _id: articleId,
    },
    {
      $push: { "rating.ratedProfiles": { action, profileId } },
      $set: { "rating.rating": updatedRating },
    },
    { new: true }
  );

  if (!updatedArticle) {
    throw ApiError.BadRequest("Во время оценки статьи произошла ошибка");
  }

  return updatedArticle;
};
