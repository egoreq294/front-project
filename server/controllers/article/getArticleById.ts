import { Request, Response, NextFunction } from "express";
import {
  getProfileById as getProfileByIdService,
  getArticleById as getArticleByIdService,
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

    const article = await getArticleByIdService(id);

    let profile = null;

    if (_expand === "profile") {
      profile = await getProfileByIdService(article.profileId);
    }

    const articleDTO = getArticleDTO(article);
    const profileDTO = profile ? getProfileDTO(profile) : null;

    return res.json({
      ...articleDTO,
      ...(!!profile && { profile: profileDTO }),
    });
  } catch (e) {
    next(e);
  }
};
