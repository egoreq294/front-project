import { createAsyncThunk } from '@reduxjs/toolkit';

import { ThunkConfig } from '@app/providers/StoreProvider';
import {
  rateArticleMutation,
  RateArticleProps,
} from '../../api/articleRatingApi';
import { Article } from '../types/article';

export const rateArticle = createAsyncThunk<
  Article,
  RateArticleProps,
  ThunkConfig<string>
>('article/rateArticle', async (props, { rejectWithValue, dispatch }) => {
  try {
    const response = await dispatch(rateArticleMutation(props)).unwrap();

    if (!response) {
      return rejectWithValue('error');
    }

    return response;
  } catch (e) {
    return rejectWithValue('error');
  }
});
