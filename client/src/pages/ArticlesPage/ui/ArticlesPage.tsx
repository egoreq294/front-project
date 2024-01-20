import React, { FC, useCallback } from 'react';

import { ArticlePageGreeting } from '@features/ArticlePageGreeting';
import { StickyContentLayout } from '@shared/layouts';
import {
  DynamicModuleLoader,
  ReducerList,
} from '@shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from '@shared/lib/hooks/useAppDispatch';
import { Page } from '@widgets/Page';
import { fetchNextArticles } from '../model/services/fetchNextArticles';
import { articlesPageReducer } from '../model/slices/articlesPageSlice';
import { ArticleInfiniteList } from './ArticleInfiniteList';
import { Filters } from './Filters';
import { ViewSelector } from './ViewSelector';

const reducers: ReducerList = {
  articlesPage: articlesPageReducer,
};

const ArticlesPage: FC = () => {
  const dispatch = useAppDispatch();

  const onLoadNextPart = useCallback(() => {
    dispatch(fetchNextArticles());
  }, [dispatch]);

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount={false}>
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
