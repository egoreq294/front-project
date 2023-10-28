import React, { FC, useCallback } from 'react';

import {
  DynamicModuleLoader,
  ReducerList,
} from '@shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from '@shared/lib/hooks/useAppDispatch';
import { Page } from '@widgets/Page/Page';
import { fetchNextArticles } from '../model/services/fetchNextArticles';
import { articlesPageReducer } from '../model/slices/articlesPageSlice';
import { ArticleInfiniteList } from './ArticleInfiniteList';
import { ArticlesPageFilters } from './ArticlesPageFilters';

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
      <Page onScrollEnd={onLoadNextPart}>
        <ArticlesPageFilters />
        <ArticleInfiniteList />
      </Page>
    </DynamicModuleLoader>
  );
};

export default ArticlesPage;
