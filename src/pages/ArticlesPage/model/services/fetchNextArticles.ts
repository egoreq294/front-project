import { ThunkConfig } from '@app/providers/StorePovider';
import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  getArticlesPageHasMore,
  getArticlesPageIsLoading,
  getArticlesPageNumber,
} from '../selectors/articlesPageSelectors';
import { articlesPageActions } from '../slices/articlesPageSlice';
import { fetchArticles } from './fetchArticles';

export const fetchNextArticles = createAsyncThunk<
  void,
  void,
  ThunkConfig<string>
>('articlesPage/fetchNextArticles', async (_, { getState, dispatch }) => {
  const hasMore = getArticlesPageHasMore(getState());
  const page = getArticlesPageNumber(getState());
  const isLoading = getArticlesPageIsLoading(getState());

  if (!hasMore || isLoading) {
    return;
  }

  dispatch(articlesPageActions.setPage(page + 1));
  dispatch(fetchArticles({ page: page + 1 }));
});
