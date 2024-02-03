import { createAsyncThunk } from '@reduxjs/toolkit';

import { ThunkConfig } from '@app/providers/StoreProvider';
import { Article } from '@entities/Article';
import { ArticleTypeEnum } from '@entities/Article';
import { addQueryParams } from '@shared/lib/url/addQueryParams';
import {
  getArticlesPageLimit,
  getArticlesPageOrder,
  getArticlesPageSearch,
  getArticlesPageSort,
  getArticlesPageType,
} from '../selectors/articlesPageSelectors';

interface FetchArticlesArgs {
  page?: number;
  replace?: boolean;
}

export const fetchArticles = createAsyncThunk<
  Article[],
  FetchArticlesArgs,
  ThunkConfig<string>
>(
  'articlesPage/fetchArticles',
  async ({ page = 0 }, { extra, rejectWithValue, getState }) => {
    const limit = getArticlesPageLimit(getState());
    const order = getArticlesPageOrder(getState());
    const sort = getArticlesPageSort(getState());
    const search = getArticlesPageSearch(getState());
    const type = getArticlesPageType(getState());

    try {
      addQueryParams({ order, sort, search, type });
      const response = await extra.api.get<Article[]>('/articles', {
        params: {
          _expand: 'profile',
          _limit: limit,
          _page: page,
          _sort: sort,
          _order: order,
          search: search,
          type: type === ArticleTypeEnum.ALL ? undefined : type,
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
