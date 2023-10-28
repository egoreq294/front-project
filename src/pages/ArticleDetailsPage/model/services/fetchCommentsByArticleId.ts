import { createAsyncThunk } from '@reduxjs/toolkit';

import { ThunkConfig } from '@app/providers/StorePovider';
import { CommentType } from '@entities/Comment';

export const fetchCommentsByArticleId = createAsyncThunk<
  CommentType[],
  string,
  ThunkConfig<string>
>(
  'articleDetails/fetchCommentsByArticleId',
  async (articleId, { extra, rejectWithValue }) => {
    try {
      const response = await extra.api.get<CommentType[]>('/comments', {
        params: {
          articleId,
          _expand: 'user',
        },
      });

      if (!response.data) {
        throw new Error();
      }

      return response.data;
    } catch (e) {
      return rejectWithValue('error');
    }
  },
);
