import React, { FC, useCallback } from 'react';
import { useSelector } from 'react-redux';

import { ArticleSortField, ArticleTypeEnum } from '@entities/Article';
import { ArticlesFilters } from '@features/ArticlesFilters';
import { EMPTY_STRING } from '@shared/constants/common';
import { useAppDispatch } from '@shared/lib/hooks/useAppDispatch';
import { useDebounce } from '@shared/lib/hooks/useDebounce';
import { SortOrder } from '@shared/types';
import { TabItem } from '@shared/ui/Tabs';
import {
  getArticlesPageOrder,
  getArticlesPageSearch,
  getArticlesPageSort,
  getArticlesPageType,
} from '../model/selectors/articlesPageSelectors';
import { fetchArticles } from '../model/services/fetchArticles';
import { articlesPageActions } from '../model/slices/articlesPageSlice';

interface FiltersProps {
  className?: string;
}

export const Filters: FC<FiltersProps> = ({ className }) => {
  const dispatch = useAppDispatch();

  const order = useSelector(getArticlesPageOrder);
  const sort = useSelector(getArticlesPageSort);
  const search = useSelector(getArticlesPageSearch);
  const type = useSelector(getArticlesPageType);

  const fetchData = useCallback(() => {
    dispatch(fetchArticles({ page: 1, replace: true }));
  }, []);

  const debouncedFetchData = useDebounce(fetchData, 1000);

  const onChangeOrder = useCallback(
    (newOrder: SortOrder): void => {
      dispatch(articlesPageActions.setOrder(newOrder));
      dispatch(articlesPageActions.setPage(1));
      fetchData();
    },
    [dispatch, fetchData],
  );

  const onChangeSort = useCallback(
    (newSort: ArticleSortField): void => {
      dispatch(articlesPageActions.setSort(newSort));
      dispatch(articlesPageActions.setPage(1));
      fetchData();
    },
    [dispatch, fetchData],
  );

  const onChangeSearch = useCallback(
    (newSearch: string): void => {
      dispatch(articlesPageActions.setSearch(newSearch || EMPTY_STRING));
      dispatch(articlesPageActions.setPage(1));
      debouncedFetchData();
    },
    [dispatch, debouncedFetchData],
  );

  const onChangeType = useCallback(
    (newTab: TabItem<ArticleTypeEnum>): void => {
      dispatch(articlesPageActions.setType(newTab.value));
      dispatch(articlesPageActions.setPage(1));
      fetchData();
    },
    [dispatch, fetchData],
  );

  return (
    <ArticlesFilters
      className={className}
      sort={sort}
      order={order}
      search={search}
      type={type}
      onChangeOrder={onChangeOrder}
      onChangeSort={onChangeSort}
      onChangeSearch={onChangeSearch}
      onChangeType={onChangeType}
    />
  );
};
