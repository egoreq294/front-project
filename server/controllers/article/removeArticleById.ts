import { Request, Response, NextFunction } from "express";
import {
  getUserById as getUserByIdService,
  removeArticleById as removeArticleByIdService,
} from "../../services";

export const removeArticleById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const {
      user: { _id: userId },
    } = req.body;

    const { id } = req.params;

    const user = await getUserByIdService(userId);

    const updatedArticle = await removeArticleByIdService({
      profileId: user.profile,
      articleId: id,
    });

    return res.json(updatedArticle);
  } catch (e) {
    next(e);
  }
};
