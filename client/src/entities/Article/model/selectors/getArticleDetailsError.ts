import { StateSchema } from '@app/providers/StoreProvider';

export const getArticleDetailsError = (state: StateSchema): string | null =>
  state.articleDetails?.error || null;
