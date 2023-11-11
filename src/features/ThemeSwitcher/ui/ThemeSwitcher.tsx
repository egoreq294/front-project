import cn from 'classnames';
import React, { FC, memo } from 'react';

import { Theme } from '@shared/lib/constants/theme';
import { useTheme } from '@shared/lib/hooks/useTheme';
import { Button } from '@shared/ui/Button';
import { Icon } from '@shared/ui/Icon';

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
        {theme === Theme.LIGHT && <Icon name="Sun" />}
        {theme === Theme.DARK && <Icon name="Moon" />}
        {theme === Theme.ORANGE && <Icon name="Orange" />}
      </div>
    </Button>
  );
});
