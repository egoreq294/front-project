import React, { FC, useCallback, useMemo } from 'react';
import { useFormContext } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import { ArticleTypeEnum } from '@entities/Article';
import { VStack } from '@shared/ui/Stack';
import { TabItem, Tabs } from '@shared/ui/Tabs';
import { Typography } from '@shared/ui/Typography';
import { ArticleFormSchema } from '../model/types/ArticleFormSchema';

interface ArticleTypeTabsProps {
  className?: string;
}

export const ArticleTypeTabs: FC<ArticleTypeTabsProps> = ({ className }) => {
  const { t } = useTranslation('article');

  const { getValues, setValue, watch } = useFormContext<ArticleFormSchema>();

  const tabs = useMemo<TabItem<ArticleTypeEnum>[]>(
    () => [
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
    (tab: TabItem<ArticleTypeEnum>) => {
      const selectedTabs = getValues('type');
      setValue('type', [...selectedTabs, tab.value]);
    },
    [setValue, getValues],
  );

  const onRemoveTab = useCallback(
    (tabForRemove: TabItem<ArticleTypeEnum>) => {
      const selectedTabs = getValues('type');
      setValue(
        'type',
        selectedTabs.filter((tab) => tab !== tabForRemove.value),
      );
    },
    [setValue, getValues],
  );

  return (
    <VStack gap="8" fullWidth>
      <Typography variant="S">{t('select-article-type')}</Typography>
      <Tabs
        className={className}
        tabs={tabs}
        selectedTabs={watch('type')}
        onSelectTab={onSelectTab}
        onRemoveTab={onRemoveTab}
      />
    </VStack>
  );
};
