import cn from 'classnames';
import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { ArticleSortField, ArticleTypeEnum } from '@entities/Article';
import { getUserAuthData } from '@entities/User';
import { SortOrder } from '@shared/types';
import { Button } from '@shared/ui/Button';
import { Card } from '@shared/ui/Card';
import { Icon } from '@shared/ui/Icon';
import { Input } from '@shared/ui/Input';
import { Typography } from '@shared/ui/Typography';
import { ArticleSortSelect } from '../../ArticleSortSelect';
import { ArticleTypeTabs } from '../../ArticleTypeTabs';

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
  type,
  onChangeType,
  onChangeSearch,
  search,
  sort,
  order,
  onChangeOrder,
  onChangeSort,
  onCreateArticle,
}) => {
  const { t } = useTranslation('article');
  const authData = useSelector(getUserAuthData);

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

      {!authData?.profile?.lastName || !authData.profile?.firstName ? (
        <Typography>
          {t('fill-firstname-or-lastname-to-create-ana-article')}
        </Typography>
      ) : (
        <Button onClick={onCreateArticle}>{t(`create-article`)}</Button>
      )}
    </Card>
  );
};
