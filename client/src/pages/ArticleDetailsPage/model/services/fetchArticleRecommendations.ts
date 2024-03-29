import { createAsyncThunk } from '@reduxjs/toolkit';

import { ThunkConfig } from '@app/providers/StoreProvider';
import { Article } from '@entities/Article';

export const fetchArticleRecommendaions = createAsyncThunk<
  Article[],
  void,
  ThunkConfig<string>
>(
  'articleDetails/fetchArticleRecommendaions',
  async (_, { extra, rejectWithValue }) => {
    try {
      const response = await extra.api.get<Article[]>('/articles', {
        params: {
          _expand: 'profile',
          _limit: 8,
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
