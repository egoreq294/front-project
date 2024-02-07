import { ObjectId } from "mongodb";
import { Article } from "../../types/article";
import { ArticleModel } from "../../models/Article";
import { BlocksDTO, getBlocksDTO } from "./getBlocksDTO";
import { RatingDTO, getRatingDTO } from "./getRatingDTO";

export type ArticleDTO = Omit<Article, "blocks" | "createdAt" | "rating"> & {
  id: ObjectId;
  createdAt: string;
  blocks: BlocksDTO[];
  rating: RatingDTO;
};

type Options = {
  canRateArticle?: boolean;
};

export const getArticleDTO = (
  articleModel: InstanceType<typeof ArticleModel>,
  options?: Options
): ArticleDTO => {
  return {
    id: articleModel._id,
    title: articleModel.title,
    subtitle: articleModel.subtitle,
    image: articleModel.image,
    views: articleModel.views,
    createdAt: articleModel.createdAt.toISOString().split("T")[0],
    profileId: articleModel.profileId,
    type: articleModel.type,
    blocks: getBlocksDTO(articleModel),
    rating: getRatingDTO(articleModel, options?.canRateArticle),
  };
};
