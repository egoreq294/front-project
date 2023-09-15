import { Article, ArticleViewMode } from '@entities/Article';
import {
  ArticleSortField,
  ArticleTypeEnum,
} from '@entities/Article/model/types/article';
import { EntityState } from '@reduxjs/toolkit';
import { SortOrder } from '@shared/types';

export interface ArticlesPageSchema extends EntityState<Article> {
  isLoading?: boolean;
  error?: string;
  view: ArticleViewMode;
  // pagination
  page: number;
  limit?: number;
  hasMore: boolean;
  // filters, sorting, search
  order: SortOrder;
  sort: ArticleSortField;
  search: string;
  type: ArticleTypeEnum;
  // system field
  _inited: boolean;
}
