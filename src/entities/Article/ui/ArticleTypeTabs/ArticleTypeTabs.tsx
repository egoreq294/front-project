import React, { FC, useMemo } from 'react';
import { TabItem, Tabs } from '@shared/ui/Tabs/Tabs';
import { ArticleTypeEnum } from '../../model/types/article';
import { useTranslation } from 'react-i18next';

interface ArticleTypeTabsProps {
  className?: string;
  type: ArticleTypeEnum;
  onChangeType: (newTab: TabItem<ArticleTypeEnum>) => void;
}

export const ArticleTypeTabs: FC<ArticleTypeTabsProps> = ({
  className,
  type,
  onChangeType,
}) => {
  const { t } = useTranslation('article');

  const tabs = useMemo<TabItem<ArticleTypeEnum>[]>(
    () => [
      {
        value: ArticleTypeEnum.ALL,
        label: t('all'),
      },
      {
        value: ArticleTypeEnum.IT,
        label: t('it'),
      },
      {
        value: ArticleTypeEnum.ECONOMICS,
        label: t('economics'),
      },
      {
        value: ArticleTypeEnum.SCIENCE,
        label: t('science'),
      },
    ],
    [t],
  );

  return (
    <Tabs
      className={className}
      tabs={tabs}
      value={type}
      onChange={onChangeType}
    />
  );
};
