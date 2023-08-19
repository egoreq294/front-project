import React, { FC } from 'react';
import cn from 'classnames';
import styles from './styles.module.scss';
import { CommentType } from '../../model/types/comment';
import { Avatar } from '@shared/ui/Avatar/Avatar';
import { Caption } from '@shared/ui/Caption/Caption';

interface CommentItemProps {
  comment: CommentType;

  className?: string;
}

export const CommentItem: FC<CommentItemProps> = ({ className, comment }) => {
  return (
    <div className={cn(styles.CommentItem, className)}>
      <div className={styles.UserInfo}>
        {comment.user.avatar && <Avatar size={30} src={comment.user.avatar} />}
        <Caption label={comment.user.username} />
      </div>
      <Caption value={comment.text} />
    </div>
  );
};
