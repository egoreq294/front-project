import cn from 'classnames';
import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { ArticleSortField, ArticleTypeEnum } from '@entities/Article';
import { SortOrder } from '@shared/types';
import { Card } from '@shared/ui/Card';
import { Icon } from '@shared/ui/Icon';
import { Input } from '@shared/ui/Input';
import { TabItem } from '@shared/ui/Tabs';
import { ArticleSortSelect } from '../../ArticleSortSelect';
import { ArticleTypeTabs } from '../../ArticleTypeTabs';

import styles from './styles.module.scss';

interface ArticlesFiltersProps {
  className?: string;
  type: ArticleTypeEnum;
  onChangeType: (newTab: TabItem<ArticleTypeEnum>) => void;
  onChangeSearch: (newSearch: string) => void;
  search: string;
  sort: ArticleSortField;
  order: SortOrder;
  onChangeOrder: (newOrder: SortOrder) => void;
  onChangeSort: (newSort: ArticleSortField) => void;
}

export const ArticlesFilters: FC<ArticlesFiltersProps> = ({
  className,
  type,
  onChangeType,
  onChangeSearch,
  search,
  sort,
  order,
  onChangeOrder,
  onChangeSort,
}) => {
  const { t } = useTranslation('article');

  return (
    <Card className={cn(styles.ArticlesFilters, className)} padding="24">
      <Input
        placeholder={t('search')}
        onChange={onChangeSearch}
        value={search}
        addonLeft={<Icon name="Search" width={32} height={32} />}
      />

      <ArticleTypeTabs type={type} onChangeType={onChangeType} />
      <ArticleSortSelect
        order={order}
        sort={sort}
        onChangeOrder={onChangeOrder}
        onChangeSort={onChangeSort}
      />
    </Card>
  );
};
