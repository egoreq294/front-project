import React, { FC } from 'react';
import { useParams } from 'react-router-dom';

import { ArticleDetails } from '@entities/Article';
import { ArticleRating } from '@features/ArticleRating';
import { ArticleRecommendationsList } from '@features/ArticleRecommendationsList';
import { Card } from '@shared/ui/Card';
import { VStack } from '@shared/ui/Stack';
import { ArticleDetailsComments } from '../ArticleDetailsComments/ArticleDetailsComments';

interface ArticleDetailsContainerProps {
  className?: string;
}

export const ArticleDetailsContainer: FC<ArticleDetailsContainerProps> = ({
  className,
}) => {
  const { id } = useParams<{ id: string }>();

  if (!id) {
    return null;
  }

  return (
    <Card fullWidth className={className} padding="24">
      <VStack gap="24">
        <ArticleDetails articleId={id} />
        <ArticleRating articleId={id} />
        <ArticleRecommendationsList />
        <ArticleDetailsComments id={id} />
      </VStack>
    </Card>
  );
};
