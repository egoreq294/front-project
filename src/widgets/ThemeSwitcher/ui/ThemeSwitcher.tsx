import cn from 'classnames';
import React, { FC, memo } from 'react';

import { useTheme } from '@app/providers';
import { Theme } from '@app/providers/ThemeProvider';
import DarkIcon from '@shared/assets/icons/moon.svg';
import OrangeIcon from '@shared/assets/icons/orange.svg';
import LightIcon from '@shared/assets/icons/sun.svg';
import { Button } from '@shared/ui/Button/Button';

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
