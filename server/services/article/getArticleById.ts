import { ObjectId } from "mongodb";
import { ApiError } from "../../exceptions";
import { ArticleModel } from "../../models/Article";

export const getArticleById = async (id: string | ObjectId) => {
  const article = await ArticleModel.findById(id);

  if (!article) {
    throw ApiError.BadRequest("Статья не найдена");
  }

  return article;
};
