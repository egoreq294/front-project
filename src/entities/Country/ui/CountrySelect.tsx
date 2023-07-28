import React, { FC, memo, useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { Select } from '@shared/ui/Select/Select';
import { CountryEnum } from '../model/types/country';

interface CountrySelectProps {
  value?: CountryEnum;
  onChange?: (value: CountryEnum) => void;
  className?: string;
  readOnly?: boolean;
}

export const CountrySelect: FC<CountrySelectProps> = memo(
  ({ value, onChange, readOnly, className }) => {
    const { t } = useTranslation();

    const onChangeHandler = useCallback((val: string): void => {
      onChange?.(val as CountryEnum);
    }, []);

    const options = useMemo(
      () => [
        { value: CountryEnum.Russia, label: t('russia') },
        { value: CountryEnum.UnitedStates, label: t('usa') },
      ],
      [t],
    );

    return (
      <Select
        className={className}
        label={t('Country')}
        value={value}
        onChange={onChangeHandler}
        options={options}
        readOnly={readOnly}
      />
    );
  },
);
