import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { ArticleList } from '@entities/Article';
import { VStack } from '@shared/ui/Stack';
import { Typography } from '@shared/ui/Typography';
import { useArticleRecommendationsList } from '../../api/articleRecommendationsApi';

interface ArticleRecommendationsListProps {
  className?: string;
}

export const ArticleRecommendationsList: FC<
  ArticleRecommendationsListProps
> = ({ className }) => {
  const { t } = useTranslation('article');

  const { data: articles, isLoading } = useArticleRecommendationsList(3);

  return (
    <VStack
      gap="16"
      fullWidth
      className={className}
      data-testid="ArticleRecommendationsList"
    >
      <Typography variant="M">{t('recommendations')}</Typography>
      <ArticleList
        articles={articles || []}
        target="_blank"
        isLoading={isLoading}
      />
    </VStack>
  );
};
