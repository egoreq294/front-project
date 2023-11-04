import cn from 'classnames';
import React, { FC, memo } from 'react';

import DarkIcon from '@shared/assets/icons/moon.svg';
import OrangeIcon from '@shared/assets/icons/orange.svg';
import LightIcon from '@shared/assets/icons/sun.svg';
import { Theme } from '@shared/lib/constants/theme';
import { useTheme } from '@shared/lib/hooks/useTheme';
import { Button } from '@shared/ui/Button';

import styles from './styles.module.scss';

interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher: FC<ThemeSwitcherProps> = memo(({ className }) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      variant="GhostInverted"
      className={cn(styles.ThemeSwitcher, className)}
      onClick={toggleTheme}
    >
      <div className={styles.IconContainer}>
        {theme === Theme.LIGHT && <LightIcon />}
        {theme === Theme.DARK && <DarkIcon />}
        {theme === Theme.ORANGE && <OrangeIcon />}
      </div>
    </Button>
  );
});
