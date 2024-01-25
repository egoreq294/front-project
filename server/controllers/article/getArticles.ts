import { Request, Response, NextFunction } from "express";
import {
  getProfileById as getProfileByIdService,
  getArticles as getArticlesService,
  getUserById as getUserByIdService,
  canRateArticle as canRateArticleService,
} from "../../services";
import { getProfileDTO, getArticleDTO } from "../../utils";
import { ArticleTypeEnum } from "../../types/article";
import { TokenPayload } from "../../types/token";

interface GetArticlesQueryParams {
  _expand?: string;
  _limit?: number;
  _page?: number;
  _sort?: string;
  _order?: "asc" | "desc";
  search?: string;
  type?: ArticleTypeEnum;
}

export const getArticles = async (
  req: Request<{}, {}, { user: TokenPayload }, GetArticlesQueryParams>,
  res: Response,
  next: NextFunction
) => {
  try {
    const { _expand, _limit, _page, _sort, _order, search, type } = req.query;
    const {
      user: { _id: userId },
    } = req.body;

    const currentUser = await getUserByIdService(userId);

    const articles = await getArticlesService({
      limit: _limit,
      page: _page,
      search,
      sort: _sort,
      order: _order,
      type,
    });

    const result = await Promise.all(
      articles.map(async (article) => {
        let profile = null;

        if (_expand === "profile") {
          profile = await getProfileByIdService(article.profileId);
        }

        const canRateArticle = await canRateArticleService({
          articleId: article._id,
          profileId: currentUser.profile,
        });

        const articleDTO = getArticleDTO(article, { canRateArticle });
        const profileDTO = profile ? getProfileDTO(profile) : null;

        return {
          ...articleDTO,
          ...(!!profile && { profile: profileDTO }),
        };
      })
    );

    return res.json(result);
  } catch (e) {
    next(e);
  }
};
