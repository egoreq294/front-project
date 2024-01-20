import { ArticleModel } from "../../models/Article";
import { Article } from "../../types/article";

type CreateArticleArgs = Omit<
  Article,
  "views" | "createdAt" | "comments" | "rating"
>;

export const createArticle = async (args: CreateArticleArgs) => {
  const { title, subtitle, image, profileId, type, blocks } = args;
  const createdAt = new Date();
  const article = await ArticleModel.create({
    title,
    subtitle,
    image,
    profileId,
    type,
    blocks,
    createdAt,
    views: 0,
    comments: [],
    rating: 0,
  });

  return article;
};
