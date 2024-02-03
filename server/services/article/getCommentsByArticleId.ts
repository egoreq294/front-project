import { ObjectId } from "mongodb";
import { ApiError } from "../../exceptions";
import { CommentModel } from "../../models/Article";

export const getCommentsByArticleId = async (id: string | ObjectId) => {
  const comments = await CommentModel.find({ articleId: id });

  if (!comments) {
    throw ApiError.BadRequest("Комментарии не найдены");
  }

  return comments;
};
