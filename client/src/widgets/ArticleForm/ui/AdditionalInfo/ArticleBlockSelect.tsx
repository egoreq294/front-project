import React, { FC, memo, useMemo } from 'react';
import { useTranslation } from 'react-i18next';

import { ArticleBlockTypeEnum } from '@entities/Article';
import { ListBox, ListBoxItem } from '@shared/ui/ListBox';

interface CurrencySelectProps {
  value?: ArticleBlockTypeEnum;
  onChange?: (value: ArticleBlockTypeEnum) => void;
  className?: string;
  disabled?: boolean;
}

export const ArticleBlockSelect: FC<CurrencySelectProps> = memo(
  ({ value, onChange, className, disabled }) => {
    const { t } = useTranslation('article');

    const options = useMemo<ListBoxItem<ArticleBlockTypeEnum>[]>(
      () => [
        {
          value: ArticleBlockTypeEnum.TEXT,
          content: t('text-block'),
        },
        {
          value: ArticleBlockTypeEnum.CODE,
          content: t('code-block'),
        },
        {
          value: ArticleBlockTypeEnum.IMAGE,
          content: t('image-block'),
        },
      ],
      [t],
    );

    const onChangeHandler = (val: string): void => {
      onChange?.(val as ArticleBlockTypeEnum);
    };

    return (
      <ListBox
        className={className}
        label={`${t('select-block')}:`}
        value={value}
        onChange={onChangeHandler}
        items={options}
        fullWidth
        readOnly={disabled}
      />
    );
  },
);
