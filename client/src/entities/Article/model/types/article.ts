import { Profile } from '@entities/Profile';
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

export type ArticleRating = {
  value: number;
  canRateArticle: boolean;
};

export interface Article {
  id: string;
  title: string;
  profile: Profile;
  subtitle: string;
  image: string;
  views: number;
  createdAt: string;
  type: ArticleTypeEnum[];
  blocks: ArticleBlock[];
  rating: ArticleRating;
}

export type ArticleViewMode = 'List' | 'Plate';
