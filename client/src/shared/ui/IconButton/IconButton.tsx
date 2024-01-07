import cn from 'classnames';
import React, { ButtonHTMLAttributes, FC } from 'react';

import { Icon } from '../Icon';
import { IconName } from '../Icon/types';

import styles from './styles.module.scss';

interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  name: IconName;
  className?: string;
  width?: number;
  height?: number;
  disabled?: boolean;
  testId?: string;
}

export const IconButton: FC<IconButtonProps> = ({
  className,
  width = 20,
  height = 20,
  name,
  disabled,
  testId,
  ...props
}) => (
  <button
    type="button"
    data-testid={testId ? `IconButton_${testId}` : undefined}
    className={cn(styles.IconButton, className)}
    disabled={disabled}
    {...props}
  >
    <Icon name={name} width={width} height={height} />
  </button>
);
