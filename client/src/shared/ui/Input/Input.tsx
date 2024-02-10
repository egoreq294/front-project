import cn from 'classnames';
import React, {
  FC,
  forwardRef,
  InputHTMLAttributes,
  ReactNode,
  Ref,
  useState,
} from 'react';

import { VStack } from '../Stack';
import { Typography } from '../Typography';

import styles from './styles.module.scss';

type HTMLInputProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'value' | 'onChange'
>;

interface InputProps extends HTMLInputProps {
  className?: string;
  value?: string;
  label?: string;
  onChange?: (value: string) => void;
  readOnly?: boolean;
  addonLeft?: ReactNode;
  addonRight?: ReactNode;
  error?: string | null;
  testId?: string;
}

export const Input: FC<InputProps> = forwardRef(
  (props: InputProps, ref: Ref<HTMLInputElement> | undefined) => {
    const {
      className,
      value,
      label,
      onChange,
      type = 'text',
      disabled,
      testId,
      addonLeft,
      addonRight,
      error,
      ...restProps
    } = props;

    const [isFocused, setIsFocused] = useState(false);

    const onBlur = (): void => {
      setIsFocused(false);
    };

    const onFocus = (): void => {
      setIsFocused(true);
    };

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
      onChange?.(e.target.value);
    };

    return (
      <VStack fullWidth gap="8" className={className}>
        {!!label && <Typography variant="S">{label}</Typography>}
        <VStack fullWidth gap="4">
          <div
            className={cn(
              styles.InputWrapper,
              isFocused && styles.Focused,
              !!addonLeft && styles.WithAddonLeft,
              !!addonRight && styles.WithAddonRight,
            )}
          >
            <div className={styles.AddonLeft}>{addonLeft}</div>
            <input
              ref={ref}
              type={type}
              value={value}
              onChange={onChangeHandler}
              onFocus={onFocus}
              onBlur={onBlur}
              className={cn(styles.Input)}
              disabled={disabled}
              data-testid={testId ? `Input_${testId}` : undefined}
              {...restProps}
            />
            <div className={styles.AddonRight}>{addonRight}</div>
          </div>
          {!!error && (
            <Typography variant="XS" className={styles.Error}>
              {error}
            </Typography>
          )}
        </VStack>
      </VStack>
    );
  },
);
