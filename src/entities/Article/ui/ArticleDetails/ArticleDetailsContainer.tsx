import React, { FC, memo, useEffect } from 'react';
import { DynamicModuleLoader } from '@shared/lib/components/DynamicModuleLoader';
import { ReducerList } from '@shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { articleDetailsReducer } from '../../model/slice/articleDetailsSlice';
import { useAppDispatch } from '@shared/lib/hooks/useAppDispatch';
import { fetchArticleById } from '../../model/services/fetchArticleById';
import { useSelector } from 'react-redux';
import { getArticleDetailsData } from '../../model/selectors/getArticleDetailsData';
import { getArticleDetailsError } from '../../model/selectors/getArticleDetailsError';
import { getArticleDetailsLoading } from '../../model/selectors/getArticleDetailsLoading';
import { ArticleDetails } from './ArticleDetails';
import styles from './styles.module.scss';

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
        <div className={styles.ArticleDetails}>
          <ArticleDetails article={article} loading={loading} error={error} />
        </div>
      </DynamicModuleLoader>
    );
  },
);
