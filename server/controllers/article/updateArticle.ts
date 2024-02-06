import {
  updateArticle as updateArticleService,
  getUserById as getUserByIdService,
  getProfileById as getProfileByIdService,
} from "../../services";
import { Request, Response, NextFunction } from "express";
import { getArticleDTO } from "../../utils/article";

export const updateArticle = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const {
      id,
      title,
      subtitle,
      image,
      type,
      blocks,
      user: { _id: userId },
    } = req.body;

    const user = await getUserByIdService(userId);

    const profile = await getProfileByIdService(user.profile);

    const article = await updateArticleService({
      id: id,
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
