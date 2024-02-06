import { EMPTY_STRING } from '@shared/constants/common';
import { ArticleFormSchema } from '../types/ArticleFormSchema';

export const CREATE_ARTICLE_INITIAL_VALUE: ArticleFormSchema = {
  title: EMPTY_STRING,
  subtitle: EMPTY_STRING,
  image: EMPTY_STRING,
  type: [],
  blocks: [],
};

export const ERROR_MESSAGES = {
  CanNotBeEmpty: 'can-not-be-empty',
};
