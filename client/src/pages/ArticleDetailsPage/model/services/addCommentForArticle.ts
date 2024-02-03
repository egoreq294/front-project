import { createAsyncThunk } from '@reduxjs/toolkit';

import { ThunkConfig } from '@app/providers/StoreProvider';
import { getArticleDetailsData } from '@entities/Article';
import { CommentType } from '@entities/Comment';

export const addCommentForArticle = createAsyncThunk<
  CommentType[],
  string,
  ThunkConfig<string>
>(
  'articleDetails/addCommentForArticle',
  async (text, { extra, rejectWithValue, getState }) => {
    const article = getArticleDetailsData(getState());

    if (!article) {
      return rejectWithValue('error');
    }

    try {
      const response = await extra.apiNew.post<CommentType[]>(
        '/articles/add-comment',
        {
          articleId: article.id,
          text,
        },
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
