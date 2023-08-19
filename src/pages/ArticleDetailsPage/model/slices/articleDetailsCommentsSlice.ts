import { StateSchema } from '@app/providers/StorePovider';
import { CommentType } from '@entities/Comment';
import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { ArticleDetailsCommentSchema } from '../types/articleDetailsCommentSchema';
import { fetchCommentsByArticleId } from '../services/fetchCommentsByArticleId';

const commentsAdapter = createEntityAdapter<CommentType>({
  selectId: (comment) => comment.id,
});

export const getArticleComments = commentsAdapter.getSelectors<StateSchema>(
  (state) => state.articleDetailsComment || commentsAdapter.getInitialState(),
);

const articleDetailsCommentsSlice = createSlice({
  name: 'articleDetailsCommentsSlice',
  initialState: commentsAdapter.getInitialState<ArticleDetailsCommentSchema>({
    isLoading: false,
    ids: [],
    entities: {},
  }),
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCommentsByArticleId.pending, (state) => {
      state.error = undefined;
      state.isLoading = true;
    });
    builder.addCase(
      fetchCommentsByArticleId.fulfilled,
      (state, { payload }) => {
        state.isLoading = false;
        commentsAdapter.setAll(state, payload);
      },
    );
    builder.addCase(fetchCommentsByArticleId.rejected, (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    });
  },
});

export const { reducer: articleDetailsCommentsReducer } =
  articleDetailsCommentsSlice;
export const { actions: articleDetailsCommentsActions } =
  articleDetailsCommentsSlice;
