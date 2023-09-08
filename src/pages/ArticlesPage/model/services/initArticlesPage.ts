import { ThunkConfig } from '@app/providers/StorePovider';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { getArticlesPageInited } from '../selectors/articlesPageSelectors';
import { articlesPageActions } from '../slices/articlePageSclice';
import { fetchArticles } from './fetchArticles';

export const initArticlesPage = createAsyncThunk<
  void,
  void,
  ThunkConfig<string>
>('articlesPage/initArticlesPage', async (_, { getState, dispatch }) => {
  const inited = getArticlesPageInited(getState());

  if (inited) {
    return;
  }

  dispatch(articlesPageActions.initState());
  dispatch(fetchArticles({ page: 1 }));
});
