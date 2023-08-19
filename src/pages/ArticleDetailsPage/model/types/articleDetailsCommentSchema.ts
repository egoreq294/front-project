import { CommentType } from '@entities/Comment';
import { EntityState } from '@reduxjs/toolkit';

export interface ArticleDetailsCommentSchema extends EntityState<CommentType> {
  isLoading?: boolean;
  error?: string;
}
