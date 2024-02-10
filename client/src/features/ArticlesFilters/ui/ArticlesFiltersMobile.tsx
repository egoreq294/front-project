import cn from 'classnames';
import React, { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { ArticleSortField, ArticleTypeEnum } from '@entities/Article';
import { SortOrder } from '@shared/types';
import { Button } from '@shared/ui/Button';
import { Card } from '@shared/ui/Card';
import { Icon } from '@shared/ui/Icon';
import { VStack } from '@shared/ui/Stack';
import { ArticlesFiltersContent } from './ArticlesFiltersContent';

import styles from './styles.module.scss';

interface ArticlesFiltersMobileProps {
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

export const ArticlesFiltersMobile: FC<ArticlesFiltersMobileProps> = ({
  className,
  ...restProps
}) => {
  const [isShowFilters, setIsShowFilters] = useState(false);
  const { t } = useTranslation('article');

  const onChangeShowFilters = (): void => {
    setIsShowFilters((prev) => !prev);
  };

  return (
    <Card fullWidth className={cn(styles.ArticlesFiltersMobile, className)}>
      <VStack gap="8" fullWidth>
        <Button onClick={onChangeShowFilters} variant="Ghost">
          <span>{isShowFilters ? t('hide-filters') : t('show-filters')}</span>
          <Icon
            name={isShowFilters ? 'ChevronDown' : 'ChevronRight'}
            width={16}
            height={16}
          />
        </Button>
        {isShowFilters && (
          <VStack gap="8" fullWidth>
            <ArticlesFiltersContent {...restProps} />
          </VStack>
        )}
      </VStack>
    </Card>
  );
};
