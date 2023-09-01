import { StateSchema } from '@app/providers/StorePovider';
import {
  PayloadAction,
  createEntityAdapter,
  createSlice,
} from '@reduxjs/toolkit';
import { Article, ArticleViewMode } from '@entities/Article';
import { ArticlePageSchema } from '../types/articlePageSchema';
import { fetchArticles } from '../services/fetchArticles';
import { ATRTICLES_VIEW_MODE_LOCALSTORAGE_KEY } from '@shared/constants/localstorage';

const articlesAdapter = createEntityAdapter<Article>({
  selectId: (article) => article.id,
});

export const getArticles = articlesAdapter.getSelectors<StateSchema>(
  (state) => state.articlesPage || articlesAdapter.getInitialState(),
);

const articlePageSlice = createSlice({
  name: 'articlePageSlice',
  initialState: articlesAdapter.getInitialState<ArticlePageSchema>({
    isLoading: false,
    view: 'List',
    ids: [],
    entities: {},
  }),
  reducers: {
    setView: (state, action: PayloadAction<ArticleViewMode>) => {
      state.view = action.payload;
      localStorage.setItem(
        ATRTICLES_VIEW_MODE_LOCALSTORAGE_KEY,
        action.payload,
      );
    },
    initState: (state) => {
      state.view = localStorage.getItem(
        ATRTICLES_VIEW_MODE_LOCALSTORAGE_KEY,
      ) as ArticleViewMode;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchArticles.pending, (state) => {
      state.error = undefined;
      state.isLoading = true;
    });
    builder.addCase(fetchArticles.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      articlesAdapter.setAll(state, payload);
    });
    builder.addCase(fetchArticles.rejected, (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    });
  },
});

export const { reducer: articlePageReducer } = articlePageSlice;
export const { actions: articlePageActions } = articlePageSlice;
