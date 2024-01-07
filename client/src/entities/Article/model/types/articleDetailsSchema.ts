import { Article } from './article';

export interface ArticleDetailsSchema {
  loading: boolean;
  data?: Article;
  error?: string;
}
