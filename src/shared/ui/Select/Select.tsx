import React, { ChangeEvent, FC, useCallback } from 'react';
import cn from 'classnames';
import styles from './styles.module.scss';

type Option = {
  value: string;
  label: string;
};

interface SelectProps {
  className?: string;
  label?: string;
  options: Option[];
  value?: string;
  onChange?: (value: string) => void;
  readOnly?: boolean;
}

export const Select: FC<SelectProps> = ({
  label,
  options,
  value,
  onChange,
  className,
  readOnly,
}) => {
  const onChangeHandler = useCallback(
    (e: ChangeEvent<HTMLSelectElement>) => {
      onChange?.(e.target.value);
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
