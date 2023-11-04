import { StateSchema } from '@app/providers/StoreProvider';

export const getArticleRecommendationIsLoading = (
  state: StateSchema,
): boolean => !!state.articleDetailsPage?.recommendations?.isLoading;

export const ggetArticleRecommendationError = (
  state: StateSchema,
): string | null => state.articleDetailsPage?.recommendations?.error || null;
