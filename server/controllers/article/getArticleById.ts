import { Request, Response, NextFunction } from "express";
import {
  getProfileById as getProfileByIdService,
  getArticleById as getArticleByIdService,
  getUserById as getUserByIdService,
  canRateArticle as canRateArticleService,
} from "../../services";
import { getProfileDTO, getArticleDTO } from "../../utils";

export const getArticleById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;

    const {
      user: { _id: userId },
    } = req.body;

    const { _expand } = req.query;

    const currentUser = await getUserByIdService(userId);

    const article = await getArticleByIdService(id);

    const canRateArticle = await canRateArticleService({
      articleId: article._id,
      profileId: currentUser.profile,
    });

    let profile = null;

    if (_expand === "profile") {
      profile = await getProfileByIdService(article.profileId);
    }

    const articleDTO = getArticleDTO(article, { canRateArticle });
    const profileDTO = profile ? getProfileDTO(profile) : null;

    return res.json({
      ...articleDTO,
      ...(!!profile && { profile: profileDTO }),
    });
  } catch (e) {
    next(e);
  }
};
