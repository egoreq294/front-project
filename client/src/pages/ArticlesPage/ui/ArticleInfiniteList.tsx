import React, { FC } from 'react';
import { useSelector } from 'react-redux';

import { ArticleList } from '@entities/Article';
import {
  getArticlesPageIsLoading,
  getArticlesPageView,
} from '../model/selectors/articlesPageSelectors';
import { getArticles } from '../model/slices/articlesPageSlice';

export const ArticleInfiniteList: FC = () => {
  const articles = useSelector(getArticles.selectAll);
  const viewMode = useSelector(getArticlesPageView);
  const isLoading = useSelector(getArticlesPageIsLoading);

  return (
    <ArticleList
      viewMode={viewMode}
      articles={articles}
      isLoading={isLoading}
    />
  );
};
