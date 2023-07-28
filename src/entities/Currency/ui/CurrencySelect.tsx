import React, { FC, memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { Select } from '@shared/ui/Select/Select';
import { CurrencyEnum } from '../model/types/currency';

interface CurrencySelectProps {
  value?: CurrencyEnum;
  onChange?: (value: CurrencyEnum) => void;
  className?: string;
  readOnly?: boolean;
}

const CURRENCY_OPTIONS = [
  { value: CurrencyEnum.RUB, label: CurrencyEnum.RUB },
  { value: CurrencyEnum.USD, label: CurrencyEnum.USD },
  { value: CurrencyEnum.EUR, label: CurrencyEnum.EUR },
];

export const CurrencySelect: FC<CurrencySelectProps> = memo(
  ({ value, onChange, readOnly, className }) => {
    const { t } = useTranslation();

    const onChangeHandler = useCallback((val: string): void => {
      onChange?.(val as CurrencyEnum);
    }, []);

    return (
      <Select
        className={className}
        label={t('currency')}
        value={value}
        onChange={onChangeHandler}
        options={CURRENCY_OPTIONS}
        readOnly={readOnly}
      />
    );
  },
);
