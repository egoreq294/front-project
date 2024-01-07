import { User } from '@entities/User';
import { ArticleBlockTypeEnum, ArticleTypeEnum } from '../constants/article';

export interface ArticleBlockBase {
  id: string;
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
  title?: string;
  paragraphs: string[];
}

export type ArticleBlock =
  | ArticleCodeBlock
  | ArticleImageBlock
  | ArticleTextBlock;

export interface Article {
  id: string;
  title: string;
  user: User;
  subtitle: string;
  img: string;
  views: number;
  createdAt: string;
  type: ArticleTypeEnum[];
  blocks: ArticleBlock[];
}

export type ArticleViewMode = 'List' | 'Plate';
