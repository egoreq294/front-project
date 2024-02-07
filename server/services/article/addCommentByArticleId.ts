import { CommentModel } from "../../models/Article";
import { ApiError } from "../../exceptions";
import { ObjectId } from "mongodb";
import { getArticleById } from "./getArticleById";
import { getCommentsByArticleId } from "./getCommentsByArticleId";

type AddCommentByArticleIdArgs = {
  profileId: ObjectId | string;
  articleId: ObjectId | string;
  text: string;
};

export const addCommentByArticleId = async (
  args: AddCommentByArticleIdArgs
) => {
  const { articleId, profileId, text } = args;

  const article = await getArticleById(articleId);

  const comment = await CommentModel.create({
    text,
    profileId,
    articleId,
  });

  if (!comment) {
    throw ApiError.BadRequest("Произошла техническая ошибка, попробуйте позже");
  }

  const comments = await getCommentsByArticleId(articleId);

  return comments;
};
