import { ArticleDetails } from '@entities/Article';
import { CommentList } from '@entities/Comment';
import { Caption } from '@shared/ui/Caption/Caption';
import React, { FC, useCallback, useEffect } from 'react';
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
import { AddCommentForm } from '@features/AddCommentForm';
import { addCommentForArticle } from '../model/services/addCommentForArticle';

const reducers: ReducerList = {
  articleDetailsComment: articleDetailsCommentsReducer,
};

const ArticleDetailsPage: FC = () => {
  const { id } = useParams<{ id: string }>();
  const { t } = useTranslation('article');

  const dispatch = useAppDispatch();

  const comments = useSelector(getArticleComments.selectAll);
  const isLoading = useSelector(getArticleDetailsCommentsIsLoading);

  const onSendComment = useCallback(
    (value: string) => {
      dispatch(addCommentForArticle(value));
    },
    [dispatch],
  );

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
    <DynamicModuleLoader reducers={reducers}>
      <div>
        <ArticleDetails articleId={id} />
        <div className={styles.CommentsWrapper}>
          <Caption label={t('comments')} />
          <AddCommentForm onSendComment={onSendComment} />
          <CommentList comments={comments} isLoading={isLoading} />
        </div>
      </div>
    </DynamicModuleLoader>
  );
};

export default ArticleDetailsPage;
