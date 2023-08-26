import React, { FC } from 'react';
import cn from 'classnames';
import styles from './styles.module.scss';
import { useTranslation } from 'react-i18next';
import { Article, ArticleViewMode } from '../../model/types/article';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';
import { ArticleListSkeleton } from './ArticleListSkeleton';
import { Typography } from '@shared/ui/Typography/Typography';

interface ArticleListProps {
  className?: string;
  articles: Article[];
  isLoading?: boolean;
  viewMode?: ArticleViewMode;
}

export const ArticleList: FC<ArticleListProps> = ({
  className,
  viewMode = 'Plate',
  articles,
  isLoading,
}) => {
  const { t } = useTranslation('article');

  if (isLoading) {
    return (
      <div className={cn(styles.ArticleList, className)}>
        <ArticleListSkeleton viewMode={viewMode} />
      </div>
    );
  }

  if (!articles.length) {
    return <Typography variant="M">{t('empty-articles')}</Typography>;
  }

  return (
    <div className={cn(styles.ArticleList, className)}>
      {articles.map((article) => (
        <ArticleListItem
          key={article.id}
          article={article}
          viewMode={viewMode}
        />
      ))}
    </div>
  );
};
