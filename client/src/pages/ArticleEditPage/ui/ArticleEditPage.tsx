import React, { FC, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import {
  articleDetailsReducer,
  getArticleDetailsData,
  getArticleDetailsLoading,
} from '@entities/Article';
import { fetchArticleById } from '@entities/Article';
import { EditArticle } from '@features/EditArticle';
import {
  DynamicModuleLoader,
  ReducerList,
} from '@shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from '@shared/lib/hooks/useAppDispatch';

const reducers: ReducerList = {
  articleDetails: articleDetailsReducer,
};

const ArticleEditPage: FC = () => {
  const { id } = useParams<{ id: string }>();

  const dispatch = useAppDispatch();

  const article = useSelector(getArticleDetailsData);
  const loading = useSelector(getArticleDetailsLoading);

  useEffect(() => {
    if (!id) {
      return;
    }

    dispatch(fetchArticleById(id));
  }, [dispatch, id]);

  if (!id) {
    return null;
  }

  return (
    <DynamicModuleLoader reducers={reducers}>
      <EditArticle article={article} loading={loading} />
    </DynamicModuleLoader>
  );
};

export default ArticleEditPage;
