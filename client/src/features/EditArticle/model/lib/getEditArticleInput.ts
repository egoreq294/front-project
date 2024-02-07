import { ArticleBlockTypeEnum } from '@entities/Article';
// eslint-disable-next-line egoreq-plugin/layer-imports
import { ArticleFormSchema } from '@widgets/ArticleForm';
import { ArticleBlock, EditArticleInput } from '../types/editArticleInput';

export const getEditArticleInput = (
  id: string,
  article: ArticleFormSchema,
): EditArticleInput => {
  const { title, subtitle, image, type, blocks } = article;

  const blocksInput =
    blocks.map((block): ArticleBlock => {
      if (block.type === ArticleBlockTypeEnum.CODE) {
        return { type: ArticleBlockTypeEnum.CODE, code: block.code };
      }
      if (block.type === ArticleBlockTypeEnum.IMAGE) {
        return {
          type: ArticleBlockTypeEnum.IMAGE,
          src: block.src,
          title: block.title,
        };
      }

      return {
        type: ArticleBlockTypeEnum.TEXT,
        title: block.title,
        paragraphs: block.paragraphs.split('\n\n'),
      };
    }) || [];

  return { id, title, subtitle, image, type, blocks: blocksInput };
};
