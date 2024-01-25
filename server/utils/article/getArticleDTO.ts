import { ObjectId } from "mongodb";
import { Article } from "../../types/article";
import { ArticleModel, CommentModel } from "../../models/Article";
import { CommentDTO, getCommentsDTO } from "./getCommentsDTO";
import { BlocksDTO, getBlocksDTO } from "./getBlocksDTO";
import { RatingDTO, getRatingDTO } from "./getRatingDTO";

export type ArticleDTO = Omit<
  Article,
  "comments" | "blocks" | "createdAt" | "rating"
> & {
  id: ObjectId;
  createdAt: string;
  comments: CommentDTO[];
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
    blocks: getBlocksDTO(articleModel.blocks),
    comments: getCommentsDTO(articleModel.comments),
    rating: getRatingDTO(articleModel.rating, options?.canRateArticle),
  };
};
