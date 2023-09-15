import React, { FC, useCallback } from 'react';
import {
  ArticleSortField,
  ArticleSortSelect,
  ArticleTypeTabs,
  ArticleViewMode,
  ArticleViewSelector,
} from '@entities/Article';
import { useSelector } from 'react-redux';
import {
  getArticlesPageOrder,
  getArticlesPageSearch,
  getArticlesPageSort,
  getArticlesPageType,
  getArticlesPageView,
} from '../model/selectors/articlesPageSelectors';
import { useAppDispatch } from '@shared/lib/hooks/useAppDispatch';
import { articlesPageActions } from '../model/slices/articlesPageSlice';
import { useTranslation } from 'react-i18next';
import styles from './styles.module.scss';
import { Input } from '@shared/ui/Input/Input';
import { Card } from '@shared/ui/Card/Card';
import { SortOrder } from '@shared/types';
import { fetchArticles } from '../model/services/fetchArticles';
import { useDebounce } from '@shared/lib/hooks/useDebounce';
import { EMPTY_STRING } from '@shared/constants/common';
import { TabItem } from '@shared/ui/Tabs/Tabs';
import { ArticleTypeEnum } from '@entities/Article/model/types/article';
import cn from 'classnames';

interface ArticlesPageFiltersProps {
  className?: string;
}

export const ArticlesPageFilters: FC<ArticlesPageFiltersProps> = ({
  className,
}) => {
  const dispatch = useAppDispatch();
  const { t } = useTranslation('article');

  const viewMode = useSelector(getArticlesPageView);
  const order = useSelector(getArticlesPageOrder);
  const sort = useSelector(getArticlesPageSort);
  const search = useSelector(getArticlesPageSearch);
  const type = useSelector(getArticlesPageType);

  const fetchData = useCallback(() => {
    dispatch(fetchArticles({ page: 1, replace: true }));
  }, []);

  const debouncedFetchData = useDebounce(fetchData, 1000);

  const onChangeView = useCallback(
    (view: ArticleViewMode): void => {
      dispatch(articlesPageActions.setView(view));
    },
    [dispatch],
  );

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
    <div className={cn(className, styles.Filters)}>
      <div className={styles.SortWrapper}>
        <ArticleSortSelect
          order={order}
          sort={sort}
          onChangeOrder={onChangeOrder}
          onChangeSort={onChangeSort}
        />
        <ArticleViewSelector
          selectedViewMode={viewMode}
          onViewModeClick={onChangeView}
        />
      </div>
      <Card>
        <Input
          placeholder={t('search')}
          onChange={onChangeSearch}
          value={search}
        />
      </Card>
      <ArticleTypeTabs type={type} onChangeType={onChangeType} />
    </div>
  );
};
