import { StateSchema } from '@app/providers/StorePovider';
import { Article } from '../types/article';

export const getArticleDetailsData = (state: StateSchema): Article | null =>
  state.articleDetails?.data || null;
