import React, { FC, memo } from 'react';
import cn from 'classnames';
import { useTheme } from '@app/providers';

import DarkIcon from '@shared/assets/icons/moon.svg';
import LightIcon from '@shared/assets/icons/sun.svg';
import OrangeIcon from '@shared/assets/icons/orange.svg';
import { Theme } from '@app/providers/ThemeProvider';
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
