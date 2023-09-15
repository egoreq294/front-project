import { ThunkConfig } from '@app/providers/StorePovider';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { getArticlesPageInited } from '../selectors/articlesPageSelectors';
import { articlesPageActions } from '../slices/articlesPageSlice';
import { fetchArticles } from './fetchArticles';
import { SortOrder } from '@shared/types';
import { ArticleSortField } from '@entities/Article';

export const initArticlesPage = createAsyncThunk<
  void,
  URLSearchParams,
  ThunkConfig<string>
>(
  'articlesPage/initArticlesPage',
  async (searchParams, { getState, dispatch }) => {
    const inited = getArticlesPageInited(getState());

    if (inited) {
      return;
    }

    const orderFromUrl = searchParams.get('order') as SortOrder;
    const sortFromUrl = searchParams.get('sort') as ArticleSortField;
    const searchFromUrl = searchParams.get('search');

    if (orderFromUrl) {
      dispatch(articlesPageActions.setOrder(orderFromUrl));
    }

    if (sortFromUrl) {
      dispatch(articlesPageActions.setSort(sortFromUrl));
    }

    if (searchFromUrl) {
      dispatch(articlesPageActions.setSearch(searchFromUrl));
    }

    dispatch(articlesPageActions.initState());
    dispatch(fetchArticles({ page: 1 }));
  },
);
