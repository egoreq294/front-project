import cn from 'classnames';
import React, { FC } from 'react';

import { ArticleSortField, ArticleTypeEnum } from '@entities/Article';
import { SortOrder } from '@shared/types';
import { Card } from '@shared/ui/Card';
import { ArticlesFiltersContent } from './ArticlesFiltersContent';

import styles from './styles.module.scss';

interface ArticlesFiltersProps {
  className?: string;
  type: ArticleTypeEnum[];
  onChangeType: (newTypes: ArticleTypeEnum[]) => void;
  onChangeSearch: (newSearch: string) => void;
  search: string;
  sort: ArticleSortField;
  order: SortOrder;
  onChangeOrder: (newOrder: SortOrder) => void;
  onChangeSort: (newSort: ArticleSortField) => void;
  onCreateArticle: () => void;
}

export const ArticlesFilters: FC<ArticlesFiltersProps> = ({
  className,
  ...restProps
}) => {
  return (
    <Card className={cn(styles.ArticlesFilters, className)} padding="24">
      <ArticlesFiltersContent {...restProps} />
    </Card>
  );
};
