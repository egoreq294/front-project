import { createAsyncThunk } from '@reduxjs/toolkit';

import { ThunkConfig } from '@app/providers/StoreProvider';
import { CommentType } from '@entities/Comment';

export const fetchCommentsByArticleId = createAsyncThunk<
  CommentType[],
  string,
  ThunkConfig<string>
>(
  'articleDetails/fetchCommentsByArticleId',
  async (articleId, { extra, rejectWithValue }) => {
    try {
      const response = await extra.apiNew.get<CommentType[]>(
        `/articles/${articleId}/comments`,
      );

      if (!response.data) {
        throw new Error();
      }

      return response.data;
    } catch (e) {
      return rejectWithValue('error');
    }
  },
);
