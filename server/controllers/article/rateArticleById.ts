import { Request, Response, NextFunction } from "express";
import {
  getProfileById as getProfileByIdService,
  rateArticleById as rateArticleByIdService,
  getUserById as getUserByIdService,
} from "../../services";
import { getArticleDTO } from "../../utils";

export const rateArticleById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const {
      user: { _id: userId },
      articleId,
      action,
    } = req.body;

    const user = await getUserByIdService(userId);

    const profile = await getProfileByIdService(user.profile);

    const ratedArticle = await rateArticleByIdService({
      articleId: articleId,
      profileId: profile._id,
      action,
    });

    const articleDTO = getArticleDTO(ratedArticle);

    return res.json(articleDTO);
  } catch (e) {
    next(e);
  }
};
