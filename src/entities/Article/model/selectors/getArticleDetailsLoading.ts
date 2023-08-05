import { StateSchema } from '@app/providers/StorePovider';

export const getArticleDetailsLoading = (state: StateSchema): boolean =>
  !!state.articleDetails?.loading;
