import React, { FC, memo, useEffect } from 'react';
import { useSelector } from 'react-redux';

import { DynamicModuleLoader } from '@shared/lib/components/DynamicModuleLoader';
import { ReducerList } from '@shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from '@shared/lib/hooks/useAppDispatch';
import { getArticleDetailsData } from '../../model/selectors/getArticleDetailsData';
import { getArticleDetailsError } from '../../model/selectors/getArticleDetailsError';
import { getArticleDetailsLoading } from '../../model/selectors/getArticleDetailsLoading';
import { fetchArticleById } from '../../model/services/fetchArticleById';
import { articleDetailsReducer } from '../../model/slice/articleDetailsSlice';
import { ArticleDetails } from './ArticleDetails';

interface ArticleDetailsContainerProps {
  articleId: string;
  className?: string;
}

const reducers: ReducerList = {
  articleDetails: articleDetailsReducer,
};

export const ArticleDetailsContainer: FC<ArticleDetailsContainerProps> = memo(
  ({ articleId }) => {
    const dispatch = useAppDispatch();

    const article = useSelector(getArticleDetailsData);
    const loading = useSelector(getArticleDetailsLoading);
    const error = useSelector(getArticleDetailsError);

    useEffect(() => {
      dispatch(fetchArticleById(articleId));
    }, [dispatch, articleId]);

    return (
      <DynamicModuleLoader reducers={reducers}>
        <ArticleDetails article={article} loading={loading} error={error} />
      </DynamicModuleLoader>
    );
  },
);
