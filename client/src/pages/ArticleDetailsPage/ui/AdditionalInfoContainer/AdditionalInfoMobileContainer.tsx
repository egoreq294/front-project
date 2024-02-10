import React, { FC } from 'react';
import { useSelector } from 'react-redux';

import {
  getArticleDetailsData,
  getArticleDetailsLoading,
} from '@entities/Article';
import { ArticleAdditionalInfo } from '@features/ArticleAdditionalInfo';
import { Card } from '@shared/ui/Card';
import { Skeleton } from '@shared/ui/Skeleton';
import { VStack } from '@shared/ui/Stack';

import styles from './styles.module.scss';

interface AdditionalInfoMobileContainerProps {
  className?: string;
}

export const AdditionalInfoMobileContainer: FC<
  AdditionalInfoMobileContainerProps
> = ({ className }) => {
  const article = useSelector(getArticleDetailsData);
  const isLoading = useSelector(getArticleDetailsLoading);

  if (isLoading) {
    return (
      <Card className={className} fullWidth padding="8">
        <Skeleton height={150} />
      </Card>
    );
  }

  if (!article) {
    return null;
  }

  return (
    <Card fullWidth className={className} padding="8">
      <VStack gap="8" fullWidth align="center">
        <ArticleAdditionalInfo
          author={article.profile}
          createdAt={article.createdAt}
          views={article.views}
          className={styles.MobileAdditionalInfo}
        />
      </VStack>
    </Card>
  );
};
