import { createAsyncThunk } from '@reduxjs/toolkit';

import { ThunkConfig } from '@app/providers/StoreProvider';
import { ArticleSortField } from '@entities/Article';
import { ArticleTypeEnum } from '@entities/Article';
import { SortOrder } from '@shared/types';
import { articlesPageActions } from '../slices/articlesPageSlice';
import { fetchArticles } from './fetchArticles';

export const initArticlesPage = createAsyncThunk<
  void,
  URLSearchParams,
  ThunkConfig<string>
>('articlesPage/initArticlesPage', async (searchParams, { dispatch }) => {
  const orderFromUrl = searchParams.get('order') as SortOrder;
  const sortFromUrl = searchParams.get('sort') as ArticleSortField;
  const searchFromUrl = searchParams.get('search');
  const typeFromUrl = searchParams.get('type') as ArticleTypeEnum;

  if (orderFromUrl) {
    dispatch(articlesPageActions.setOrder(orderFromUrl));
  }

  if (sortFromUrl) {
    dispatch(articlesPageActions.setSort(sortFromUrl));
  }

  if (searchFromUrl) {
    dispatch(articlesPageActions.setSearch(searchFromUrl));
  }

  if (typeFromUrl) {
    dispatch(
      articlesPageActions.setType(typeFromUrl.split(',') as ArticleTypeEnum[]),
    );
  }

  dispatch(articlesPageActions.initState());

  dispatch(fetchArticles({ page: 0 }));
});
