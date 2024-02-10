import React, { FC } from 'react';
import { useSelector } from 'react-redux';

import { ArticleList } from '@entities/Article';
import { useMediaQuery } from '@shared/lib/hooks/useMediaQuery';
import {
  getArticlesPageIsLoading,
  getArticlesPageView,
} from '../model/selectors/articlesPageSelectors';
import { getArticles } from '../model/slices/articlesPageSlice';

export const ArticleInfiniteList: FC = () => {
  const articles = useSelector(getArticles.selectAll);
  const viewMode = useSelector(getArticlesPageView);
  const isLoading = useSelector(getArticlesPageIsLoading);

  const { isDesktop } = useMediaQuery();

  return (
    <ArticleList
      viewMode={isDesktop ? viewMode : 'Plate'}
      articles={articles}
      isLoading={isLoading}
    />
  );
};
