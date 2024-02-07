import { v4 as uuid } from 'uuid';

import { Article, ArticleBlockTypeEnum } from '@entities/Article';
import { EMPTY_STRING } from '@shared/constants/common';
// eslint-disable-next-line egoreq-plugin/layer-imports
import { ArticleBlock, ArticleFormSchema } from '@widgets/ArticleForm';

export const getEditArticleInitialValues = (
  article: Article | null,
): ArticleFormSchema => {
  if (!article) {
    return {
      title: EMPTY_STRING,
      subtitle: EMPTY_STRING,
      image: EMPTY_STRING,
      type: [],
      blocks: [],
    };
  }
  const { title, subtitle, image, type, blocks } = article;

  const blocksInput =
    blocks.map((block): ArticleBlock => {
      if (block.type === ArticleBlockTypeEnum.CODE) {
        return {
          id: uuid(),
          type: ArticleBlockTypeEnum.CODE,
          code: block.code || EMPTY_STRING,
        };
      }
      if (block.type === ArticleBlockTypeEnum.IMAGE) {
        return {
          id: uuid(),
          type: ArticleBlockTypeEnum.IMAGE,
          src: block.src || EMPTY_STRING,
          title: block.title || EMPTY_STRING,
        };
      }

      return {
        id: uuid(),
        type: ArticleBlockTypeEnum.TEXT,
        title: block.title || EMPTY_STRING,
        paragraphs: block.paragraphs.join('\n\n'),
      };
    }) || [];

  return { title, subtitle, image, type, blocks: blocksInput };
};
