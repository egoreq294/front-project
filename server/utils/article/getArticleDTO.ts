import { ObjectId } from "mongodb";
import { Article } from "../../types/article";
import { ArticleModel, CommentModel } from "../../models/Article";
import { CommentDTO, getCommentsDTO } from "./getCommentsDTO";
import { BlocksDTO, getBlocksDTO } from "./getBlocksDTO";

export type ArticleDTO = Omit<Article, "comments" | "blocks" | "createdAt"> & {
  id: ObjectId;
  createdAt: string;
  comments: CommentDTO[];
  blocks: BlocksDTO[];
};

export const getArticleDTO = (
  articleModel: InstanceType<typeof ArticleModel>
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
    rating: articleModel.rating,
  };
};
