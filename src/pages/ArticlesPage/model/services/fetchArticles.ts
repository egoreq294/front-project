import { ThunkConfig } from '@app/providers/StorePovider';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { Article } from '@entities/Article';
import { getArticlesPageLimit } from '../selectors/articlesPageSelectors';

interface FetchArticlesArgs {
  page?: number;
}

export const fetchArticles = createAsyncThunk<
  Article[],
  FetchArticlesArgs,
  ThunkConfig<string>
>(
  'articlesPage/fetchArticles',
  async ({ page = 1 }, { extra, rejectWithValue, getState }) => {
    const limit = getArticlesPageLimit(getState());
    try {
      const response = await extra.api.get<Article[]>('/articles', {
        params: {
          _expand: 'user',
          _limit: limit,
          _page: page,
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
