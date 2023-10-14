import React, { FC, useCallback, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { VStack } from '@shared/ui/Stack';
import { Typography } from '@shared/ui/Typography/Typography';
import { AddCommentForm } from '@features/AddCommentForm';
import { CommentList } from '@entities/Comment';
import { useAppDispatch } from '@shared/lib/hooks/useAppDispatch';
import { useSelector } from 'react-redux';
import { getArticleComments } from '../../model/slices/articleDetailsCommentsSlice';
import { getArticleDetailsCommentsIsLoading } from '../../model/selectors/commentsSelectors';
import { addCommentForArticle } from '../../model/services/addCommentForArticle';
import { fetchCommentsByArticleId } from '../../model/services/fetchCommentsByArticleId';
import styles from './styles.module.scss';
import cn from 'classnames';

interface ArticleDetailsCommentsProps {
  id: string;
  className?: string;
}

export const ArticleDetailsComments: FC<ArticleDetailsCommentsProps> = ({
  id,
  className,
}) => {
  const { t } = useTranslation('article');

  const dispatch = useAppDispatch();

  const comments = useSelector(getArticleComments.selectAll);
  const isCommentsLoading = useSelector(getArticleDetailsCommentsIsLoading);

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

  return (
    <VStack gap="16" className={cn(className, styles.Wrapper)}>
      <Typography variant="M">{t('comments')}</Typography>
      <AddCommentForm onSendComment={onSendComment} />
      <CommentList comments={comments} isLoading={isCommentsLoading} />
    </VStack>
  );
};
