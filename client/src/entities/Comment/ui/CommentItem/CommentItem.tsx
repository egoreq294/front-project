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
      <AppLink to={`/profile/${comment.profile.id}`} className={styles.Avatar}>
        <HStack gap="8">
          {comment.profile?.avatar && (
            <Avatar size={32} src={comment.profile.avatar} />
          )}
          <div>
            {comment.profile?.lastName} {comment.profile?.firstName}
          </div>
        </HStack>
      </AppLink>
      <Typography testId={`Comment${comment.id}`}>{comment.text}</Typography>
    </HStack>
  );
};
