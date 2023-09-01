import { StateSchema } from '@app/providers/StorePovider';
import { ArticleViewMode } from '@entities/Article';

export const getArticlesPageIsLoading = (state: StateSchema): boolean =>
  !!state.articlesPage?.isLoading;

export const getArticlesPageView = (state: StateSchema): ArticleViewMode =>
  state.articlesPage?.view || 'List';

export const getArticlesPageError = (state: StateSchema): string | null =>
  state.articlesPage?.error || null;

export const getArticlesPageNumber = (state: StateSchema): number =>
  state.articlesPage?.page || 1;

export const getArticlesPageLimit = (state: StateSchema): number =>
  state.articlesPage?.limit || 10;

export const getArticlesPageHasMore = (state: StateSchema): boolean =>
  !!state.articlesPage?.hasMore;
