import { ArticleModel } from "../../models/Article";
import { ObjectId } from "mongodb";
import { getArticleById } from "./getArticleById";

export const updateViewsByArticleId = async (articleId: ObjectId | string) => {
  const article = await getArticleById(articleId);

  const updatedViews = article.views + 1;

  const updatedArticle = await ArticleModel.findOneAndUpdate(
    {
      _id: articleId,
    },
    {
      $set: { views: updatedViews },
    },
    { new: true }
  );

  return updatedArticle;
};
