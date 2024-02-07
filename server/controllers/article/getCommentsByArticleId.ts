import { Request, Response, NextFunction } from "express";
import {
  getCommentsByArticleId as getCommentsByArticleIdService,
  getProfileById as getProfileByIdService,
} from "../../services";
import { getProfileDTO, getCommentsDTO } from "../../utils";

export const getCommentsByArticleId = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;

    const comments = await getCommentsByArticleIdService(id);

    const commentsDTO = getCommentsDTO(comments);

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
