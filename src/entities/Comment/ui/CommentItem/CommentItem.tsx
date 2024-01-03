import cn from 'classnames';
import React, { FC } from 'react';

import { AppLink } from '@shared/ui/deprecated/AppLink';
import { Avatar } from '@shared/ui/deprecated/Avatar';
import { Typography } from '@shared/ui/deprecated/Typography';
import { CommentType } from '../../model/types/comment';

import styles from './styles.module.scss';

interface CommentItemProps {
  comment: CommentType;
  className?: string;
}

export const CommentItem: FC<CommentItemProps> = ({ className, comment }) => {
  return (
    <div className={cn(styles.CommentItem, className)}>
      <AppLink to={`/profile/${comment.user.id}`} className={styles.UserInfo}>
        {comment.user.avatar && <Avatar size={30} src={comment.user.avatar} />}
        <Typography variant="M">{comment.user.username}</Typography>
      </AppLink>
      <Typography testId={`Comment${comment.id}`}>{comment.text}</Typography>
    </div>
  );
};
