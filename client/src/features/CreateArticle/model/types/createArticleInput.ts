import { ArticleTypeEnum } from '@entities/Article';
import { ArticleBlockTypeEnum } from '@entities/Article';

export interface ArticleBlockBase {
  type: ArticleBlockTypeEnum;
}

export interface ArticleCodeBlock extends ArticleBlockBase {
  type: ArticleBlockTypeEnum.CODE;
  code: string;
}

export interface ArticleImageBlock extends ArticleBlockBase {
  type: ArticleBlockTypeEnum.IMAGE;
  src: string;
  title: string;
}

export interface ArticleTextBlock extends ArticleBlockBase {
  type: ArticleBlockTypeEnum.TEXT;
  title: string;
  paragraphs: string[];
}

export type ArticleBlock =
  | ArticleCodeBlock
  | ArticleImageBlock
  | ArticleTextBlock;

export type CreateArticleInput = {
  title: string;
  subtitle: string;
  image: string;
  type: ArticleTypeEnum[];
  blocks: ArticleBlock[];
};
