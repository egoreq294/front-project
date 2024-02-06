import cn from 'classnames';
import React, {
  FC,
  forwardRef,
  Ref,
  TextareaHTMLAttributes,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from 'react';

import { VStack } from '../Stack';
import { Typography } from '../Typography';

import styles from './styles.module.scss';

type HTMLTextAreaProps = Omit<
  TextareaHTMLAttributes<HTMLTextAreaElement>,
  'value' | 'onChange'
>;

interface TextAreaProps extends HTMLTextAreaProps {
  className?: string;
  value?: string;
  label?: string;
  onChange?: (value: string) => void;
  readOnly?: boolean;
  testId?: string;
  error?: string | null;
}

export const TextArea: FC<TextAreaProps> = forwardRef(
  (props: TextAreaProps, ref?: Ref<HTMLTextAreaElement>) => {
    const {
      className,
      value,
      label,
      onChange,
      disabled,
      testId,
      error,
      ...restProps
    } = props;

    const innerRef = useRef<HTMLTextAreaElement>(null);

    useImperativeHandle(ref, () => innerRef.current as HTMLTextAreaElement);

    const [isFocused, setIsFocused] = useState(false);

    const onBlur = (): void => {
      setIsFocused(false);
    };

    const onFocus = (): void => {
      setIsFocused(true);
    };

    const onChangeHandler = (
      e: React.ChangeEvent<HTMLTextAreaElement>,
    ): void => {
      onChange?.(e.target.value);
    };

    // autosize
    useEffect(() => {
      if (innerRef.current) {
        innerRef.current.style.height = '1px';
        innerRef.current.style.height = `${innerRef?.current?.scrollHeight}px`;
      }
    }, [value]);

    return (
      <VStack fullWidth gap="8">
        {!!label && (
          <Typography variant="S" className={styles.Label}>
            {label}
          </Typography>
        )}
        <VStack fullWidth gap="4">
          <div
            className={cn(
              styles.TextAreaWrapper,
              isFocused && styles.Focused,
              className,
            )}
          >
            <textarea
              ref={innerRef}
              value={value}
              onChange={onChangeHandler}
              onFocus={onFocus}
              onBlur={onBlur}
              className={cn(styles.TextArea)}
              disabled={disabled}
              data-testid={testId ? `TextArea_${testId}` : undefined}
              {...restProps}
            />
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
