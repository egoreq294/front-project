import { ObjectId } from "mongodb";
import { CommentModel } from "../../models/Article";

export type CommentDTO = {
  id: ObjectId;
  text: string;
  profile: ObjectId;
};

export const getCommentsDTO = (
  commentsModel: InstanceType<typeof CommentModel>[]
): CommentDTO[] => {
  return commentsModel?.map((item) => ({
    id: item._id,
    text: item.text,
    profile: item.profileId,
  }));
};
