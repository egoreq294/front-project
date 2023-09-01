import { Article, ArticleViewMode } from '@entities/Article';
import { EntityState } from '@reduxjs/toolkit';

export interface ArticlePageSchema extends EntityState<Article> {
  isLoading?: boolean;
  error?: string;
  view: ArticleViewMode;
  page: number;
  limit?: number;
  hasMore: boolean;
}
