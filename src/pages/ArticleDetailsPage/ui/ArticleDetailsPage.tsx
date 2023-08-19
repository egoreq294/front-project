import { ArticleDetails } from '@entities/Article';
import { CommentList } from '@entities/Comment';
import { Caption } from '@shared/ui/Caption/Caption';
import React, { FC, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import styles from './styles.module.scss';
import { DynamicModuleLoader } from '@shared/lib/components/DynamicModuleLoader';
import { ReducerList } from '@shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import {
  articleDetailsCommentsReducer,
  getArticleComments,
} from '../model/slices/articleDetailsCommentsSlice';
import { useSelector } from 'react-redux';
import { getArticleDetailsCommentsIsLoading } from '../model/selectors/commentsSelectors';
import { useAppDispatch } from '@shared/lib/hooks/useAppDispatch';
import { fetchCommentsByArticleId } from '../model/services/fetchCommentsByArticleId';
import { log } from 'console';

const reducers: ReducerList = {
  articleDetailsComment: articleDetailsCommentsReducer,
};

const ArticleDetailsPage: FC = () => {
  const { id } = useParams<{ id: string }>();
  const { t } = useTranslation('article');

  const dispatch = useAppDispatch();

  const comments = useSelector(getArticleComments.selectAll);
  const isLoading = useSelector(getArticleDetailsCommentsIsLoading);

  console.log(isLoading);

  useEffect(() => {
    if (!id) {
      return;
    }

    dispatch(fetchCommentsByArticleId(id));
  }, [dispatch, id]);

  if (!id) {
    return <div>{t('article-not-found')}</div>;
  }

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <div>
        <ArticleDetails articleId={id} />
        <Caption label={t('comments')} className={styles.CommentTitle} />
        <CommentList comments={comments} isLoading={isLoading} />
      </div>
    </DynamicModuleLoader>
  );
};

export default ArticleDetailsPage;
