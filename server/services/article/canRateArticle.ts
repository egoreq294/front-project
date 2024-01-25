import { ObjectId } from "mongodb";
import { ArticleModel } from "../../models/Article";
import { ApiError } from "../../exceptions";
import { RatedProfiles } from "../../types/article";

type CanRateArticleArgs = {
  articleId: ObjectId | string;
  profileId: ObjectId | string;
};

export const canRateArticle = async ({
  articleId,
  profileId,
}: CanRateArticleArgs) => {
  const article = await ArticleModel.findById(articleId);

  if (!article) {
    throw ApiError.BadRequest("Статья не найдена");
  }

  const alreadyRated: RatedProfiles | undefined =
    article.rating.ratedProfiles.find(
      (item) => String(item.profileId) === String(profileId)
    );

  return !alreadyRated;
};
