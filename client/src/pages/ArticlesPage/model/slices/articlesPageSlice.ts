import {
  createEntityAdapter,
  createSlice,
  PayloadAction,
} from '@reduxjs/toolkit';

import { StateSchema } from '@app/providers/StoreProvider';
import { Article, ArticleViewMode } from '@entities/Article';
import { ArticleSortField, ArticleTypeEnum } from '@entities/Article';
import { EMPTY_STRING } from '@shared/constants/common';
import { ATRTICLES_VIEW_MODE_LOCALSTORAGE_KEY } from '@shared/constants/localstorage';
import { SortOrder } from '@shared/types';
import { fetchArticles } from '../services/fetchArticles';
import { ArticlesPageSchema } from '../types/articlesPageSchema';

const DEFAULT_STATE: ArticlesPageSchema = {
  isLoading: false,
  view: 'List',
  ids: [],
  entities: {},
  page: 0,
  hasMore: true,
  sort: ArticleSortField.CREATED,
  search: EMPTY_STRING,
  type: [ArticleTypeEnum.ALL],
  order: 'asc',
};

const articlesAdapter = createEntityAdapter<Article>({
  selectId: (article) => article.id,
});

export const getArticles = articlesAdapter.getSelectors<StateSchema>(
  (state) => state.articlesPage || articlesAdapter.getInitialState(),
);

const articlesPageSlice = createSlice({
  name: 'articlesPageSlice',
  initialState:
    articlesAdapter.getInitialState<ArticlesPageSchema>(DEFAULT_STATE),
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
    setOrder: (state, action: PayloadAction<SortOrder>) => {
      state.order = action.payload;
    },
    setSort: (state, action: PayloadAction<ArticleSortField>) => {
      state.sort = action.payload;
    },
    setSearch: (state, action: PayloadAction<string>) => {
      state.search = action.payload;
    },
    setType: (state, action: PayloadAction<ArticleTypeEnum[]>) => {
      state.type = action.payload;
    },
    initState: (state) => {
      const view = localStorage.getItem(
        ATRTICLES_VIEW_MODE_LOCALSTORAGE_KEY,
      ) as ArticleViewMode;

      state.view = view;
      state.limit = view === 'List' ? 4 : 20;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchArticles.pending, (state, { meta }) => {
      state.error = undefined;
      state.isLoading = true;
      if (meta.arg.replace) {
        articlesAdapter.removeAll(state);
      }
    });
    builder.addCase(fetchArticles.fulfilled, (state, { payload, meta }) => {
      state.isLoading = false;

      state.hasMore = payload.length >= (state.limit ?? 0);

      if (meta.arg.replace) {
        articlesAdapter.setAll(state, payload);
        return;
      }

      articlesAdapter.addMany(state, payload);
    });
    builder.addCase(fetchArticles.rejected, (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    });
  },
});

export const { reducer: articlesPageReducer } = articlesPageSlice;
export const { actions: articlesPageActions } = articlesPageSlice;
