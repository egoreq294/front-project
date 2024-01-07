import { StateSchema } from '@app/providers/StoreProvider';

export const getArticleDetailsLoading = (state: StateSchema): boolean =>
  !!state.articleDetails?.loading;
