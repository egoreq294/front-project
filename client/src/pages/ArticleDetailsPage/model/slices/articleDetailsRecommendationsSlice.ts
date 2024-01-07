import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';

import { StateSchema } from '@app/providers/StoreProvider';
// import { fetchCommentsByArticleId } from '../services/fetchCommentsByArticleId';
import { Article } from '@entities/Article';
import { fetchArticleRecommendaions } from '../services/fetchArticleRecommendations';
import { ArticleDetailsRecommendationsSchema } from '../types/articleDetailsRecommendationsSchema';

const recommendationsAdapter = createEntityAdapter<Article>({
  selectId: (comment) => comment.id,
});

export const getArticleRecommendation =
  recommendationsAdapter.getSelectors<StateSchema>(
    (state) =>
      state.articleDetailsPage?.recommendations ||
      recommendationsAdapter.getInitialState(),
  );

const articleDetailsRecommendationsSlice = createSlice({
  name: 'articleDetailsRecommendationsSlice',
  initialState:
    recommendationsAdapter.getInitialState<ArticleDetailsRecommendationsSchema>(
      {
        isLoading: false,
        ids: [],
        entities: {},
      },
    ),
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchArticleRecommendaions.pending, (state) => {
      state.error = undefined;
      state.isLoading = true;
    });
    builder.addCase(
      fetchArticleRecommendaions.fulfilled,
      (state, { payload }) => {
        state.isLoading = false;
        recommendationsAdapter.setAll(state, payload);
      },
    );
    builder.addCase(
      fetchArticleRecommendaions.rejected,
      (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      },
    );
  },
});

export const { reducer: articleDetailsRecommendationsReducer } =
  articleDetailsRecommendationsSlice;
export const { actions: articleDetailsRecommendationsActions } =
  articleDetailsRecommendationsSlice;
