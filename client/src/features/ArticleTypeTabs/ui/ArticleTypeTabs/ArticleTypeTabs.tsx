import cn from 'classnames';
import React, { FC, useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';

import { ArticleTypeEnum } from '@entities/Article';
import { useMediaQuery } from '@shared/lib/hooks/useMediaQuery';
import { TabItem, Tabs } from '@shared/ui/Tabs';

import styles from './styles.module.scss';

interface ArticleTypeTabsProps {
  className?: string;
  type: ArticleTypeEnum[];
  onChangeType: (newTypes: ArticleTypeEnum[]) => void;
}

export const ArticleTypeTabs: FC<ArticleTypeTabsProps> = ({
  className,
  type,
  onChangeType,
}) => {
  const { t } = useTranslation('article');

  const { isDesktop } = useMediaQuery();

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

  const onSelectTab = useCallback(
    (newTab: TabItem<ArticleTypeEnum>) => {
      let newTabs = [];

      if (newTab.value === ArticleTypeEnum.ALL) {
        newTabs = [ArticleTypeEnum.ALL];
      } else {
        newTabs = [
          ...type.filter((tab) => tab !== ArticleTypeEnum.ALL),
          newTab.value,
        ];
      }

      onChangeType(newTabs);
    },
    [onChangeType, type],
  );

  const onRemoveTab = useCallback(
    (newTab: TabItem<ArticleTypeEnum>) => {
      let newTabs = [];

      if (newTab.value === ArticleTypeEnum.ALL) {
        newTabs = tabs
          .filter((tab) => tab.value !== ArticleTypeEnum.ALL)
          .map((tab) => tab.value);
      } else {
        newTabs =
          type.length !== 1
            ? type.filter((tab) => tab !== newTab.value)
            : [ArticleTypeEnum.ALL];
      }

      onChangeType(newTabs);
    },
    [type, onChangeType, tabs],
  );

  return (
    <Tabs
      className={cn(styles.Tabs, className)}
      tabs={tabs}
      selectedTabs={type}
      onSelectTab={onSelectTab}
      onRemoveTab={onRemoveTab}
      direction={isDesktop ? 'column' : 'row'}
    />
  );
};
