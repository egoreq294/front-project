import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { Typography } from '@shared/ui/Typography/Typography';
import { ArticleList } from '@entities/Article';
import { VStack } from '@shared/ui/Stack';
import { useArticleRecommendationsList } from '../../api/articleRecommendationsApi';
import styles from './styles.module.scss';

interface ArticleRecommendationsListProps {
  className?: string;
}

export const ArticleRecommendationsList: FC<
  ArticleRecommendationsListProps
> = ({ className }) => {
  const { t } = useTranslation('article');

  const { data: articles, isLoading } = useArticleRecommendationsList(8);

  return (
    <VStack gap="16" className={className}>
      <Typography variant="M">{t('recommendations')}</Typography>
      <ArticleList
        className={styles.Recommendations}
        articles={articles || []}
        target="_blank"
        isLoading={isLoading}
      />
    </VStack>
  );
};