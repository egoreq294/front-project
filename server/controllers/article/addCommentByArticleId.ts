import { Request, Response, NextFunction } from "express";
import {
  getProfileById as getProfileByIdService,
  addCommentByArticleId as addCommentByArticleIdService,
  getUserById as getUserByIdService,
} from "../../services";
import { getCommentsDTO, getProfileDTO } from "../../utils";

export const addCommentByArticleId = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const {
      user: { _id: userId },
      articleId,
      text,
    } = req.body;

    const user = await getUserByIdService(userId);

    const updatedComments = await addCommentByArticleIdService({
      articleId: articleId,
      profileId: user.profile,
      text,
    });

    const commentsDTO = getCommentsDTO(updatedComments);

    const commentsWithProfileDTO = await Promise.all(
      commentsDTO.map(async (comment) => {
        const profile = await getProfileByIdService(comment.profile);
        return { ...comment, profile: getProfileDTO(profile) };
      })
    );

    return res.json(commentsWithProfileDTO);
  } catch (e) {
    next(e);
  }
};
