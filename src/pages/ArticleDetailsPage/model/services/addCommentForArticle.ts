import { ThunkConfig } from '@app/providers/StorePovider';
import { CommentType } from '@entities/Comment';
import { getUserAuthData } from '@entities/User';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { getArticleDetailsData } from '@entities/Article';
import { fetchCommentsByArticleId } from './fetchCommentsByArticleId';

export const addCommentForArticle = createAsyncThunk<
  CommentType,
  string,
  ThunkConfig<string>
>(
  'articleDetails/addCommentForArticle',
  async (text, { dispatch, extra, rejectWithValue, getState }) => {
    const userData = getUserAuthData(getState());
    const article = getArticleDetailsData(getState());

    if (!userData || !article) {
      return rejectWithValue('error');
    }

    try {
      const response = await extra.api.post<CommentType>('/comments', {
        articleId: article.id,
        text,
        userId: userData.id,
      });

      if (!response.data) {
        throw new Error();
      }

      dispatch(fetchCommentsByArticleId(article.id));

      return response.data;
    } catch (e) {
      return rejectWithValue('error');
    }
  },
);