import { StateSchema } from '@app/providers/StorePovider';
import { ArticleViewMode, ArticleSortField } from '@entities/Article';
import { ArticleTypeEnum } from '@entities/Article/model/types/article';
import { EMPTY_STRING } from '@shared/constants/common';
import { SortOrder } from '@shared/types';

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

export const getArticlesPageInited = (state: StateSchema): boolean =>
  !!state.articlesPage?._inited;

export const getArticlesPageOrder = (state: StateSchema): SortOrder =>
  state.articlesPage?.order || 'asc';

export const getArticlesPageSort = (state: StateSchema): ArticleSortField =>
  state.articlesPage?.sort || ArticleSortField.CREATED;

export const getArticlesPageSearch = (state: StateSchema): string =>
  state.articlesPage?.search || EMPTY_STRING;

export const getArticlesPageType = (state: StateSchema): ArticleTypeEnum =>
  state.articlesPage?.type || ArticleTypeEnum.ALL;
