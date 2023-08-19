export { ArticleDetailsContainer as ArticleDetails } from './ui/ArticleDetailsContainer';
export type { Article } from './model/types/article';
export type { ArticleDetailsSchema } from './model/types/articleDetailsSchema';
export {
  articleDetailsActions,
  articleDetailsReducer,
} from './model/slice/articleDetailsSlice';
export { getArticleDetailsData } from './model/selectors/getArticleDetailsData';
