import { StateSchema } from '@app/providers/StorePovider';

export const getArticleDetailsCommentsIsLoading = (
  state: StateSchema,
): boolean => !!state.articleDetailsComment?.isLoading;

export const getArticleDetailsCommentsError = (
  state: StateSchema,
): string | null => state.articleDetailsComment?.error || null;
