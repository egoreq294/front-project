import React, { ChangeEvent, ReactElement, useCallback } from 'react';
import cn from 'classnames';
import styles from './styles.module.scss';

export type Option<T extends string> = {
  value: string;
  label: T;
};

interface SelectProps<T extends string> {
  className?: string;
  label?: string;
  options: Option<T>[];
  value?: T;
  onChange?: (value: T) => void;
  readOnly?: boolean;
}

export const Select = <T extends string>({
  label,
  options,
  value,
  onChange,
  className,
  readOnly,
}: SelectProps<T>): ReactElement => {
  const onChangeHandler = useCallback(
    (e: ChangeEvent<HTMLSelectElement>) => {
      onChange?.(e.target.value as T);
    },
    [onChange],
  );

  return (
    <div className={cn(styles.Wrapper, className)}>
      {label && <span className={styles.Label}>{`${label}>`}</span>}
      <select
        className={styles.Select}
        value={value}
        onChange={onChangeHandler}
        disabled={readOnly}
      >
        {options.map((option) => (
          <option
            key={option.value}
            value={option.value}
            className={styles.Option}
          >
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};
