import React, { FC, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';

import { ArticleList } from '@entities/Article';
import { useAppDispatch } from '@shared/lib/hooks/useAppDispatch';
import {
  getArticlesPageIsLoading,
  getArticlesPageView,
} from '../model/selectors/articlesPageSelectors';
import { initArticlesPage } from '../model/services/initArticlesPage';
import { getArticles } from '../model/slices/articlesPageSlice';

export const ArticleInfiniteList: FC = () => {
  const dispatch = useAppDispatch();

  const [searchParams] = useSearchParams();

  const articles = useSelector(getArticles.selectAll);
  const viewMode = useSelector(getArticlesPageView);
  const isLoading = useSelector(getArticlesPageIsLoading);

  useEffect(() => {
    dispatch(initArticlesPage(searchParams));
  }, [dispatch, searchParams]);

  return (
    <ArticleList
      viewMode={viewMode}
      articles={articles}
      isLoading={isLoading}
    />
  );
};
