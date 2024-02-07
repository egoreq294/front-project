import React, { FC } from 'react';

import { Article, ArticleRateActionEnum, rateArticle } from '@entities/Article';
import { useAppDispatch } from '@shared/lib/hooks/useAppDispatch';
import { IconButton } from '@shared/ui/IconButton';
import { HStack } from '@shared/ui/Stack';
import { Typography } from '@shared/ui/Typography';

interface ArticleRatingProps {
  article: Article | null;
  className?: string;
}

export const ArticleRating: FC<ArticleRatingProps> = ({
  article,
  className,
}) => {
  const dispatch = useAppDispatch();

  const canRateArticle = article?.rating.canRateArticle;

  const onLikeClick = (): void => {
    if (!article) {
      return;
    }

    dispatch(
      rateArticle({
        articleId: article?.id,
        action: ArticleRateActionEnum.LIKE,
      }),
    );
  };

  const onDislikeClick = (): void => {
    if (!article) {
      return;
    }

    dispatch(
      rateArticle({
        articleId: article?.id,
        action: ArticleRateActionEnum.DISLIKE,
      }),
    );
  };

  return (
    <HStack gap="8" className={className}>
      <IconButton
        name="Like"
        onClick={onLikeClick}
        disabled={!canRateArticle}
        width={22}
        height={22}
      />
      <Typography variant="M">{article?.rating.value}</Typography>
      <IconButton
        name="Dislike"
        onClick={onDislikeClick}
        disabled={!canRateArticle}
        width={22}
        height={22}
      />
    </HStack>
  );
};
