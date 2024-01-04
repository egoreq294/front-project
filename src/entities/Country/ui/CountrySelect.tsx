import React, { FC, memo, useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';

import { ListBox } from '@shared/ui/ListBox';
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
        { value: CountryEnum.Russia, content: t('russia') },
        { value: CountryEnum.UnitedStates, content: t('usa') },
      ],
      [t],
    );

    return (
      <ListBox
        className={className}
        label={`${t('Country')}:`}
        value={value}
        onChange={onChangeHandler}
        items={options}
        readOnly={readOnly}
      />
    );
  },
);
