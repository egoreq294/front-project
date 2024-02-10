import React, { FC } from 'react';
import { useParams } from 'react-router-dom';

import { ArticleDetails } from '@entities/Article';
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
    <VStack gap="24" fullWidth className={className}>
      <Card fullWidth className={className} padding="24">
        <ArticleDetails articleId={id} />
      </Card>
      <Card fullWidth className={className} padding="24">
        <ArticleRecommendationsList />
      </Card>
      <Card fullWidth className={className} padding="24">
        <ArticleDetailsComments id={id} />
      </Card>
    </VStack>
  );
};
