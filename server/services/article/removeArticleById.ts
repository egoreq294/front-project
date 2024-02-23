import { ObjectId } from "mongodb";
import { UserModel } from "../../models/User";
import { ApiError } from "../../exceptions";
import { ArticleModel } from "../../models/Article";

type RemoveArticleByIdArgs = {
  profileId: string | ObjectId;
  articleId: string | ObjectId;
};

export const removeArticleById = async (args: RemoveArticleByIdArgs) => {
  const { profileId, articleId } = args;

  const article = await ArticleModel.findById(articleId);

  if (!article) {
    throw ApiError.BadRequest("Во время удаления уведомления произошла ошибка");
  }

  if (article.profileId.toString() !== profileId.toString()) {
    throw ApiError.ForbiddenError();
  }

  const updatedArticle = await article.deleteOne();

  if (updatedArticle.deletedCount !== 1) {
    throw ApiError.BadRequest("Во время удаления уведомления произошла ошибка");
  }

  return updatedArticle;
};
