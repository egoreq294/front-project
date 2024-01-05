import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { VStack } from '@shared/ui/Stack';
import { Typography } from '@shared/ui/Typography';
import { CommentType } from '../../model/types/comment';
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
    <VStack gap="32" className={className} fullWidth data-testid="CommentList">
      {comments?.length || isLoading ? (
        comments?.map((comment) => (
          <CommentItem key={comment.id} comment={comment} />
        ))
      ) : (
        <Typography>{t('empty-comments')}</Typography>
      )}
    </VStack>
  );
};
