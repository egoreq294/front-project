import { ArticleList } from '@entities/Article';
import {
  DynamicModuleLoader,
  ReducerList,
} from '@shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import React, { FC, useCallback, useEffect } from 'react';
import {
  articlesPageReducer,
  getArticles,
} from '../model/slices/articlesPageSlice';
import { useAppDispatch } from '@shared/lib/hooks/useAppDispatch';
import { useSelector } from 'react-redux';
import {
  getArticlesPageIsLoading,
  getArticlesPageView,
} from '../model/selectors/articlesPageSelectors';
import { Page } from '@widgets/Page/Page';
import { fetchNextArticles } from '../model/services/fetchNextArticles';
import { initArticlesPage } from '../model/services/initArticlesPage';
import { ArticlesPageFilters } from './ArticlesPageFilters';
import { useSearchParams } from 'react-router-dom';

const reducers: ReducerList = {
  articlesPage: articlesPageReducer,
};

const ArticlesPage: FC = () => {
  const dispatch = useAppDispatch();

  const articles = useSelector(getArticles.selectAll);
  const viewMode = useSelector(getArticlesPageView);
  const isLoading = useSelector(getArticlesPageIsLoading);

  const [searchParams] = useSearchParams();

  const onLoadNextPart = useCallback(() => {
    dispatch(fetchNextArticles());
  }, [dispatch]);

  useEffect(() => {
    dispatch(initArticlesPage(searchParams));
  }, [dispatch, searchParams]);

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount={false}>
      <Page onScrollEnd={onLoadNextPart}>
        <ArticlesPageFilters />
        <ArticleList
          viewMode={viewMode}
          articles={articles}
          isLoading={isLoading}
        />
      </Page>
    </DynamicModuleLoader>
  );
};

export default ArticlesPage;
