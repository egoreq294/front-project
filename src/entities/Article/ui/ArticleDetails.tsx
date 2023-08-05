import React, { FC, memo, useEffect } from 'react';
import cn from 'classnames';
import styles from './styles.module.scss';
import { useTranslation } from 'react-i18next';
import { DynamicModuleLoader } from '@shared/lib/components/DynamicModuleLoader';
import { ReducerList } from '@shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { articleDetailsReducer } from '../model/slice/articleDetailsSlice';
import { useAppDispatch } from '@shared/lib/hooks/useAppDispatch';
import { fetchArticleById } from '../model/services/fetchArticleById';
import { useSelector } from 'react-redux';
import { getArticleDetailsData } from '../model/selectors/getArticleDetailsData';
import { getArticleDetailsError } from '../model/selectors/getArticleDetailsError';
import { getArticleDetailsLoading } from '../model/selectors/getArticleDetailsLoading';
import { Caption } from '@shared/ui/Caption/Caption';
import { ArticleDetailsSkeleton } from './ArticleDetailsSkeleton';

interface ArticleDetailsProps {
  articleId: string;
  className?: string;
}

const reducers: ReducerList = {
  articleDetails: articleDetailsReducer,
};

export const ArticleDetails: FC<ArticleDetailsProps> = memo(
  ({ className, articleId }) => {
    const { t } = useTranslation('article');
    const dispatch = useAppDispatch();

    const article = useSelector(getArticleDetailsData);
    // const loading = useSelector(getArticleDetailsLoading);
    const loading = true;
    const error = useSelector(getArticleDetailsError);

    useEffect(() => {
      dispatch(fetchArticleById(articleId));
    }, [dispatch, articleId]);

    return (
      <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
        <div className={cn(styles.ArticleDetails, className)}>
          {loading ? (
            <ArticleDetailsSkeleton />
          ) : error ? (
            <Caption
              align="Center"
              variant="Error"
              label={t('technical-error')}
            />
          ) : (
            <>{t('ArticleDetails')}</>
          )}
        </div>
      </DynamicModuleLoader>
    );
  },
);
