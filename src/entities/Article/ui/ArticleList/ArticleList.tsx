import cn from 'classnames';
import React, { FC, HTMLAttributeAnchorTarget } from 'react';
import { useTranslation } from 'react-i18next';

import { Typography } from '@shared/ui/Typography';
import { Article, ArticleViewMode } from '../../model/types/article';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';
import { ArticleListSkeleton } from './ArticleListSkeleton';

import styles from './styles.module.scss';

interface ArticleListProps {
  className?: string;
  articles: Article[];
  isLoading?: boolean;
  viewMode?: ArticleViewMode;
  target?: HTMLAttributeAnchorTarget;
}

export const ArticleList: FC<ArticleListProps> = ({
  className,
  viewMode = 'Plate',
  articles,
  isLoading,
  target,
}) => {
  const { t } = useTranslation('article');

  const isPlate = viewMode === 'Plate';

  if (!isLoading && !articles.length) {
    return <Typography variant="M">{t('empty-articles')}</Typography>;
  }

  return (
    <div
      className={cn(isPlate ? styles.Plate : styles.List, className)}
      data-testid="ArticleList"
    >
      {articles.map((article) => (
        <ArticleListItem
          key={article.id}
          article={article}
          viewMode={viewMode}
          target={target}
        />
      ))}
      {isLoading && <ArticleListSkeleton viewMode={viewMode} />}
    </div>
  );
};
