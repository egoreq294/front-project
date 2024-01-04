import cn from 'classnames';
import React, {
  FC,
  InputHTMLAttributes,
  memo,
  ReactNode,
  useRef,
  useState,
} from 'react';

import styles from './styles.module.scss';

type HTMLInputProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'value' | 'onChange'
>;

interface InputProps extends HTMLInputProps {
  className?: string;
  value?: string;
  onChange?: (value: string) => void;
  readOnly?: boolean;
  addonLeft?: ReactNode;
  addonRight?: ReactNode;
  testId?: string;
}

export const Input: FC<InputProps> = memo(
  ({
    className,
    value,
    onChange,
    type = 'text',
    disabled,
    testId,
    addonLeft,
    addonRight,
    ...props
  }) => {
    const ref = useRef<HTMLInputElement | null>(null);

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
      <div
        className={cn(
          styles.InputWrapper,
          isFocused && styles.Focused,
          !!addonLeft && styles.WithAddonLeft,
          !!addonRight && styles.WithAddonRight,
          className,
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
          {...props}
        />
        <div className={styles.AddonRight}>{addonRight}</div>
      </div>
    );
  },
);
