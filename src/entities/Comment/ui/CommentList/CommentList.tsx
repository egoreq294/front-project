import React, { FC } from 'react';
import cn from 'classnames';
import styles from './styles.module.scss';
import { useTranslation } from 'react-i18next';
import { CommentType } from '../../model/types/comment';
import { Caption } from '@shared/ui/Caption/Caption';
import { CommentItem } from '../CommentItem/CommentItem';
import { CommentListSkeleton } from './CommentListSkeleton/CommentListSkeleton';

interface CommentListProps {
  className?: string;
  comments?: CommentType[];
  isLoading?: boolean;
}

export const CommentList: FC<CommentListProps> = ({
  className,
  comments,
  isLoading,
}) => {
  const { t } = useTranslation();

  if (isLoading) {
    return <CommentListSkeleton />;
  }

  return (
    <div className={cn(styles.CommentList, className)}>
      {comments?.length || isLoading ? (
        comments?.map((comment) => (
          <CommentItem key={comment.id} comment={comment} />
        ))
      ) : (
        <Caption value={t('empty-comments')} />
      )}
    </div>
  );
};
