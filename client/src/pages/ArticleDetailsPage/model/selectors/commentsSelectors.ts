import { StateSchema } from '@app/providers/StoreProvider';

export const getArticleDetailsCommentsIsLoading = (
  state: StateSchema,
): boolean => !!state.articleDetailsPage?.comments?.isLoading;

export const getArticleDetailsCommentsError = (
  state: StateSchema,
): string | null => state.articleDetailsPage?.comments?.error || null;
