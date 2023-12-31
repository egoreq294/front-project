import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { RatingCard } from '@entities/Rating';
import { getUserAuthData } from '@entities/User';
import { EMPTY_STRING } from '@shared/constants/common';
import { Skeleton } from '@shared/ui/Skeleton';
import { useArticleRating, useRateArticle } from '../api/articleRatingApi';

interface ArticleRatingProps {
  articleId: string;
  className?: string;
}

export const ArticleRating: FC<ArticleRatingProps> = ({
  articleId,
  className,
}) => {
  const { t } = useTranslation('article');

  const user = useSelector(getUserAuthData);

  const { data, isLoading } = useArticleRating({
    articleId,
    userId: user?.id ?? EMPTY_STRING,
  });

  const [rateArticle] = useRateArticle();

  const rating = data?.[0];

  const onRateArticle = (starsCount: number, feedback?: string): void => {
    try {
      rateArticle({
        articleId,
        userId: user?.id || EMPTY_STRING,
        rate: starsCount,
        feedback,
      });
    } catch (e) {
      console.error(e);
    }
  };

  const onCancel = (starsCount: number, feedback?: string): void => {
    onRateArticle(starsCount, feedback);
  };
  const onAccept = (starsCount: number): void => {
    onRateArticle(starsCount);
  };

  if (isLoading) {
    return <Skeleton width="100%" height="120px" className={className} />;
  }

  return (
    <RatingCard
      title={t('rate-the-article')}
      feedbackTitle={t('feedback-article')}
      hasFeedback
      selectedStars={rating?.rate}
      onAccept={onAccept}
      onCancel={onCancel}
      className={className}
    />
  );
};
