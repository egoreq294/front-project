import cn from 'classnames';
import React, { FC, useMemo } from 'react';
import { useTranslation } from 'react-i18next';

import { SortOrder } from '@shared/types';
import { Option, Select } from '@shared/ui/Select/Select';
import { ArticleSortField } from '../../model/constants/article';

import styles from './styles.module.scss';

interface ArticleSortSelectProps {
  className?: string;
  sort: ArticleSortField;
  order: SortOrder;
  onChangeOrder: (newOrder: SortOrder) => void;
  onChangeSort: (newSort: ArticleSortField) => void;
}

export const ArticleSortSelect: FC<ArticleSortSelectProps> = ({
  className,
  sort,
  order,
  onChangeOrder,
  onChangeSort,
}) => {
  const { t } = useTranslation('article');

  const orderOptions = useMemo<Option<SortOrder>[]>(
    () => [
      { value: 'asc', label: t('asc') },
      { value: 'desc', label: t('desc') },
    ],
    [t],
  );

  const sortFieldOptions = useMemo<Option<ArticleSortField>[]>(
    () => [
      { value: ArticleSortField.CREATED, label: t('created-at') },
      { value: ArticleSortField.TITLE, label: t('title') },
      { value: ArticleSortField.VIEWS, label: t('views') },
    ],
    [t],
  );

  return (
    <div className={cn(styles.SelectWrapper, className)}>
      <Select
        label={t('sort-by')}
        options={sortFieldOptions}
        value={sort}
        onChange={onChangeSort}
      />
      <Select
        label={t('sort-by')}
        options={orderOptions}
        value={order}
        onChange={onChangeOrder}
      />
    </div>
  );
};
