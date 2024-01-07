import cn from 'classnames';
import React, { FC } from 'react';
import { useSelector } from 'react-redux';

import {
  getArticleDetailsData,
  getArticleDetailsLoading,
} from '@entities/Article';
import { ArticleAdditionalInfo } from '@features/ArticleAdditionalInfo';
import { Card } from '@shared/ui/Card';
import { Skeleton } from '@shared/ui/Skeleton';

import styles from './styles.module.scss';

interface AdditionalInfoContainerProps {
  className?: string;
}

export const AdditionalInfoContainer: FC<AdditionalInfoContainerProps> = ({
  className,
}) => {
  const article = useSelector(getArticleDetailsData);
  const isLoading = useSelector(getArticleDetailsLoading);

  if (isLoading) {
    return (
      <Card className={cn(styles.Card, className)} padding="24">
        <Skeleton height={300} />
      </Card>
    );
  }

  if (!article) {
    return null;
  }

  return (
    <Card className={cn(styles.Card, className)} padding="24">
      <ArticleAdditionalInfo
        author={article.user}
        createdAt={article.createdAt}
        views={article.views}
      />
    </Card>
  );
};
