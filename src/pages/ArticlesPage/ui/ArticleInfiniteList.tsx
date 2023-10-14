import React, { FC, useEffect } from 'react';
import { ArticleList } from '@entities/Article';
import { useSelector } from 'react-redux';
import { getArticles } from '../model/slices/articlesPageSlice';
import {
  getArticlesPageIsLoading,
  getArticlesPageView,
} from '../model/selectors/articlesPageSelectors';
import { useAppDispatch } from '@shared/lib/hooks/useAppDispatch';
import { useSearchParams } from 'react-router-dom';
import { initArticlesPage } from '../model/services/initArticlesPage';

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
