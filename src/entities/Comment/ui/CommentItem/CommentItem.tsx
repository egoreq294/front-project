import React, { FC } from 'react';
import cn from 'classnames';
import styles from './styles.module.scss';
import { CommentType } from '../../model/types/comment';
import { Avatar } from '@shared/ui/Avatar/Avatar';
import { AppLink } from '@shared/ui/AppLink/AppLink';
import { Typography } from '@shared/ui/Typography/Typography';

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
      <Typography>{comment.text} </Typography>
    </div>
  );
};
