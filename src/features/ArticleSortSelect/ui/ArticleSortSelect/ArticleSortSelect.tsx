import React, { FC, useMemo } from 'react';
import { useTranslation } from 'react-i18next';

import { ArticleSortField } from '@entities/Article';
import { SortOrder } from '@shared/types';
import { ListBox, ListBoxItem } from '@shared/ui/ListBox';
import { VStack } from '@shared/ui/Stack';
import { Typography } from '@shared/ui/Typography';

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

  const orderOptions = useMemo<ListBoxItem<SortOrder>[]>(
    () => [
      { value: 'asc', content: t('asc') },
      { value: 'desc', content: t('desc') },
    ],
    [t],
  );

  const sortFieldOptions = useMemo<ListBoxItem<ArticleSortField>[]>(
    () => [
      { value: ArticleSortField.CREATED, content: t('created-at') },
      { value: ArticleSortField.TITLE, content: t('title') },
      { value: ArticleSortField.VIEWS, content: t('by-views') },
    ],
    [t],
  );

  return (
    <VStack className={className} gap="8">
      <Typography variant="S">{t('sort-by')}</Typography>
      <ListBox<ArticleSortField>
        items={sortFieldOptions}
        value={sort}
        onChange={onChangeSort}
      />
      <ListBox<SortOrder>
        items={orderOptions}
        value={order}
        onChange={onChangeOrder}
      />
    </VStack>
  );
};
