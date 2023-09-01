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

const articlesPageSlice = createSlice({
  name: 'articlesPageSlice',
  initialState: articlesAdapter.getInitialState<ArticlePageSchema>({
    isLoading: false,
    view: 'List',
    ids: [],
    entities: {},
    page: 1,
    hasMore: true,
  }),
  reducers: {
    setView: (state, action: PayloadAction<ArticleViewMode>) => {
      state.view = action.payload;
      localStorage.setItem(
        ATRTICLES_VIEW_MODE_LOCALSTORAGE_KEY,
        action.payload,
      );
    },
    setPage: (state, action: PayloadAction<number>) => {
      state.page = action.payload;
    },
    initState: (state) => {
      const view = localStorage.getItem(
        ATRTICLES_VIEW_MODE_LOCALSTORAGE_KEY,
      ) as ArticleViewMode;

      state.view = view;
      state.limit = view === 'List' ? 4 : 10;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchArticles.pending, (state) => {
      state.error = undefined;
      state.isLoading = true;
    });
    builder.addCase(fetchArticles.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      articlesAdapter.addMany(state, payload);
      state.hasMore = payload.length > 0;
    });
    builder.addCase(fetchArticles.rejected, (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    });
  },
});

export const { reducer: articlesPageReducer } = articlesPageSlice;
export const { actions: articlesPageActions } = articlesPageSlice;
