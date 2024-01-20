import { ObjectId } from "mongodb";
import { Comment } from "../../types/article";
import { CommentModel } from "../../models/Article";

export type CommentDTO = {
  id: ObjectId;
} & Comment;

export const getCommentsDTO = (
  commentsModel: InstanceType<typeof CommentModel>[]
): CommentDTO[] => {
  return commentsModel?.map((item) => ({
    id: item._id,
    text: item.text,
    profileId: item.profileId,
  }));
};
