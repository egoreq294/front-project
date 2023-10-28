import { createSelector } from '@reduxjs/toolkit';

import { getArticleDetailsData } from '@entities/Article';
import { getUserAuthData } from '@entities/User';

export const canEditArticle = createSelector(
  getArticleDetailsData,
  getUserAuthData,
  (article, user): boolean => {
    if (!article || !user) {
      return false;
    }
    return article.user.id === user.id;
  },
);
