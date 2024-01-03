import cn from 'classnames';
import React, { FC } from 'react';

import { Icon } from '../Icon';
import { HStack } from '../Stack';

import styles from './styles.module.scss';

interface AppLogoProps {
  className?: string;
  width?: number;
  height?: number;
}

export const AppLogo: FC<AppLogoProps> = ({ className, width, height }) => {
  return (
    <HStack
      fullWidth
      justify="center"
      className={cn(styles.AppLogo, className)}
    >
      <div className={styles.SmallGradient} />
      <div className={styles.BigGradient} />
      <Icon name="Logo" width={width} height={height} />
    </HStack>
  );
};
