import { ArticleList, ArticleViewSelector } from '@entities/Article';
import { ArticleViewMode } from '@entities/Article/model/types/article';
import {
  DynamicModuleLoader,
  ReducerList,
} from '@shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import React, { FC, useCallback, useEffect } from 'react';
import {
  articlesPageActions,
  articlesPageReducer,
  getArticles,
} from '../model/slices/articlePageSclice';
import { useAppDispatch } from '@shared/lib/hooks/useAppDispatch';
import { useSelector } from 'react-redux';
import {
  getArticlesPageIsLoading,
  getArticlesPageView,
} from '../model/selectors/articlesPageSelectors';
import { Page } from '@widgets/Page/Page';
import { fetchNextArticles } from '../model/services/fetchNextArticles';
import { initArticlesPage } from '../model/services/initArticlesPage';

const reducers: ReducerList = {
  articlesPage: articlesPageReducer,
};

const ArticlesPage: FC = () => {
  const dispatch = useAppDispatch();

  const articles = useSelector(getArticles.selectAll);
  const viewMode = useSelector(getArticlesPageView);
  const isLoading = useSelector(getArticlesPageIsLoading);

  const onChangeView = useCallback(
    (view: ArticleViewMode): void => {
      dispatch(articlesPageActions.setView(view));
    },
    [dispatch],
  );

  const onLoadNextPart = useCallback(() => {
    dispatch(fetchNextArticles());
  }, [dispatch]);

  useEffect(() => {
    dispatch(initArticlesPage());
  }, [dispatch]);

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount={false}>
      <Page onScrollEnd={onLoadNextPart}>
        <ArticleViewSelector
          selectedViewMode={viewMode}
          onViewModeClick={onChangeView}
        />
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
