import React, { FC, memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';

import { ListBox } from '@shared/ui/ListBox';
import { CurrencyEnum } from '../model/types/currency';

interface CurrencySelectProps {
  value?: CurrencyEnum;
  onChange?: (value: CurrencyEnum) => void;
  className?: string;
  readOnly?: boolean;
}

const CURRENCY_OPTIONS = [
  { value: CurrencyEnum.RUB, content: CurrencyEnum.RUB },
  { value: CurrencyEnum.USD, content: CurrencyEnum.USD },
  { value: CurrencyEnum.EUR, content: CurrencyEnum.EUR },
];

export const CurrencySelect: FC<CurrencySelectProps> = memo(
  ({ value, onChange, readOnly, className }) => {
    const { t } = useTranslation();

    const onChangeHandler = useCallback((val: string): void => {
      onChange?.(val as CurrencyEnum);
    }, []);

    return (
      <ListBox
        className={className}
        label={t('currency')}
        value={value}
        onChange={onChangeHandler}
        items={CURRENCY_OPTIONS}
        readOnly={readOnly}
      />
    );
  },
);
