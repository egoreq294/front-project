import { ArticleModel } from "../../models/Article";
import { ArticleTypeEnum } from "../../types/article";

type GetArticlesArgs = {
  limit?: number;
  page?: number;
  search?: string;
  sort?: string;
  order?: "asc" | "desc";
  type?: ArticleTypeEnum;
};

export const getArticles = async ({
  limit,
  page,
  search,
  sort,
  order,
  type,
}: GetArticlesArgs) => {
  const query = ArticleModel.find();

  if (search) {
    query.find({
      $text: { $search: `"${search}"` },
    });
  }

  if (type && type !== ArticleTypeEnum.ALL) {
    query.find({
      type,
    });
  }

  if (limit && page !== undefined) {
    const startIndex = page * limit;

    query.skip(startIndex).limit(limit);
  }

  if (sort && order) {
    query.sort({ [sort]: order, _id: order });
  }

  const articles = await query.exec();

  return articles;
};
