import { v4 as uuid } from 'uuid';

import { ArticleBlockTypeEnum } from '@entities/Article';
import { EMPTY_STRING } from '@shared/constants/common';
import { ArticleBlock } from '../../types/ArticleFormSchema';

export const getBlockInitialValue = (
  blockType: ArticleBlockTypeEnum,
): ArticleBlock => {
  if (blockType === ArticleBlockTypeEnum.CODE) {
    return { id: uuid(), type: ArticleBlockTypeEnum.CODE, code: EMPTY_STRING };
  }

  if (blockType === ArticleBlockTypeEnum.IMAGE) {
    return {
      id: uuid(),
      type: ArticleBlockTypeEnum.IMAGE,
      src: EMPTY_STRING,
      title: EMPTY_STRING,
    };
  }

  return {
    id: uuid(),
    type: ArticleBlockTypeEnum.TEXT,
    title: EMPTY_STRING,
    paragraphs: EMPTY_STRING,
  };
};
