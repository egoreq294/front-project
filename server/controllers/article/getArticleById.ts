import { Request, Response, NextFunction } from "express";
import {
  getProfileById as getProfileByIdService,
  getArticleById as getArticleByIdService,
  getUserById as getUserByIdService,
  canRateArticle as canRateArticleService,
  updateViewsByArticleId,
} from "../../services";
import { getProfileDTO, getArticleDTO } from "../../utils";

export const getArticleById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;
    const { _expand } = req.query;
    const { user } = req.body;

    let canRateArticle = false;

    const article = await getArticleByIdService(id);

    if (user) {
      const currentUser = await getUserByIdService(user._id);

      canRateArticle = await canRateArticleService({
        articleId: article._id,
        profileId: currentUser.profile,
      });
    }

    await updateViewsByArticleId(id);

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
