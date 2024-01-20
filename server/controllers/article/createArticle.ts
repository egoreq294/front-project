import {
  createArticle as createArticleService,
  getUserById as getUserByIdService,
  getProfileById as getProfileByIdService,
} from "../../services";
import { Request, Response, NextFunction } from "express";
import { getArticleDTO } from "../../utils/article";

export const createArticle = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const {
      title,
      subtitle,
      image,
      type,
      blocks,
      user: { _id: userId },
    } = req.body;

    const user = await getUserByIdService(userId);

    const profile = await getProfileByIdService(user.profile);

    const article = await createArticleService({
      title,
      subtitle,
      image,
      profileId: profile._id,
      type,
      blocks,
    });

    const articleDTO = getArticleDTO(article);

    return res.json(articleDTO);
  } catch (e) {
    next(e);
  }
};
