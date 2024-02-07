import { ObjectId } from "mongodb";
import { ApiError } from "../../exceptions";
import { ArticleTypeEnum, Block } from "../../types/article";
import { ArticleModel } from "../../models/Article";

type UpdateArticleArgs = {
  id: ObjectId;
  title: string;
  subtitle?: string;
  image?: string;
  profileId: ObjectId;
  type: ArticleTypeEnum[];
  blocks: Block[];
};

export const updateArticle = async ({
  id,
  profileId,
  ...restFields
}: UpdateArticleArgs) => {
  const filter = { _id: id };

  const article = await ArticleModel.findById(id);

  console.log(article?.profileId);
  console.log(profileId);

  if (!profileId.equals(article?.profileId)) {
    throw ApiError.ForbiddenError();
  }

  const updatedArticle = await ArticleModel.findOneAndUpdate(
    filter,
    restFields,
    {
      new: true,
    }
  );

  if (!updatedArticle) {
    throw ApiError.BadRequest("Произошла непредвиденная ошибка");
  }

  return updatedArticle;
};
