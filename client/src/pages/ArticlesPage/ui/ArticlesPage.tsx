import React, { FC, useCallback, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

import { ArticlePageGreeting } from '@features/ArticlePageGreeting';
import { StickyContentLayout } from '@shared/layouts';
import {
  DynamicModuleLoader,
  ReducerList,
} from '@shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from '@shared/lib/hooks/useAppDispatch';
import { Page } from '@widgets/Page';
import { fetchNextArticles } from '../model/services/fetchNextArticles';
import { initArticlesPage } from '../model/services/initArticlesPage';
import { articlesPageReducer } from '../model/slices/articlesPageSlice';
import { ArticleInfiniteList } from './ArticleInfiniteList';
import { Filters } from './Filters';
import { ViewSelector } from './ViewSelector';

const reducers: ReducerList = {
  articlesPage: articlesPageReducer,
};

const ArticlesPage: FC = () => {
  const dispatch = useAppDispatch();
  const [searchParams] = useSearchParams();

  useEffect(() => {
    dispatch(initArticlesPage(searchParams));
  }, [dispatch, searchParams]);

  const onLoadNextPart = useCallback(() => {
    dispatch(fetchNextArticles());
  }, [dispatch]);

  return (
    <DynamicModuleLoader reducers={reducers}>
      <StickyContentLayout
        left={<ViewSelector />}
        content={
          <Page testId="Articles" onScrollEnd={onLoadNextPart}>
            <ArticleInfiniteList />
            <ArticlePageGreeting />
          </Page>
        }
        right={<Filters />}
      />
    </DynamicModuleLoader>
  );
};

export default ArticlesPage;
