import { StateSchema } from '@app/providers/StorePovider';
import { ArticleViewMode } from '@entities/Article';

export const getArticlePageIsLoading = (state: StateSchema): boolean =>
  !!state.articlesPage?.isLoading;

export const getArticlePageView = (state: StateSchema): ArticleViewMode =>
  state.articlesPage?.view || 'List';

export const getArticlePageError = (state: StateSchema): string | null =>
  state.articlesPage?.error || null;
