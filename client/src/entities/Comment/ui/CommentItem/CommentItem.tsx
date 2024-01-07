import React, { FC } from 'react';

import { AppLink } from '@shared/ui/AppLink';
import { Avatar } from '@shared/ui/Avatar';
import { HStack } from '@shared/ui/Stack';
import { Typography } from '@shared/ui/Typography';
import { CommentType } from '../../model/types/comment';

import styles from './styles.module.scss';

interface CommentItemProps {
  comment: CommentType;
  className?: string;
}

export const CommentItem: FC<CommentItemProps> = ({ className, comment }) => {
  return (
    <HStack fullWidth gap="32" className={className} align="start">
      <AppLink to={`/profile/${comment.user.id}`} className={styles.Avatar}>
        {comment.user.avatar && <Avatar size={32} src={comment.user.avatar} />}
      </AppLink>
      <Typography testId={`Comment${comment.id}`}>{comment.text}</Typography>
    </HStack>
  );
};
