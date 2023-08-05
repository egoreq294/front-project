import { StateSchema } from '@app/providers/StorePovider';

export const getArticleDetailsError = (state: StateSchema): string | null =>
  state.articleDetails?.error || null;
