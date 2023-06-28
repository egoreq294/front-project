import React, {
  FC,
  InputHTMLAttributes,
  memo,
  useEffect,
  useRef,
  useState,
} from 'react';
import cn from 'classnames';
import styles from './styles.module.scss';

type HTMLInputProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'value' | 'onChange'
>;

interface InputProps extends HTMLInputProps {
  className?: string;
  value?: string;
  onChange?: (value: string) => void;
}

export const Input: FC<InputProps> = memo(
  ({
    className,
    value,
    onChange,
    type = 'text',
    placeholder,
    autoFocus,
    ...props
  }) => {
    const [isFocused, setIsFocused] = useState<boolean>(false);
    const [caretPosition, setCaretPosition] = useState<number>(0);

    const ref = useRef<HTMLInputElement>();

    useEffect(() => {
      if (autoFocus) {
        setIsFocused(true);
        ref.current?.focus();
      }
    }, []);

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
      onChange?.(e.target.value);
      setCaretPosition(e.target.value.length);
    };

    const onBlur = (): void => {
      setIsFocused(false);
    };

    const onFocus = (): void => {
      setIsFocused(true);
    };

    const onSelect = (e: any): void => {
      setCaretPosition(e?.target?.selectionStart || 0);
    };

    return (
      <div className={cn(styles.InputWrapper, className)}>
        {placeholder && (
          <div className={styles.Placeholder}>{placeholder + '>'}</div>
        )}
        <div className={styles.CaretWrapper}>
          <input
            ref={ref}
            type={type}
            value={value}
            onChange={onChangeHandler}
            className={styles.Input}
            onFocus={onFocus}
            onBlur={onBlur}
            onSelect={onSelect}
            {...props}
          />
          {isFocused && (
            <span
              className={styles.Caret}
              style={{ left: `${caretPosition * 9}px` }}
            />
          )}
        </div>
      </div>
    );
  },
);
