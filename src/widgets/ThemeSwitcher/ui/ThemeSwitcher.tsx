import React, { FC } from "react";
import cn from "classnames";
import styles from "./styles.module.scss";
import { useTheme } from "@app/providers";

import DarkIcon from "@shared/assets/icons/moon.svg";
import LightIcon from "@shared/assets/icons/sun.svg";
import { Theme } from "@app/providers/ThemeProvider";
import { Button, ThemeButton } from "@shared/ui/Button/Button";

interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher: FC<ThemeSwitcherProps> = ({ className }) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      theme={ThemeButton.CLEAR}
      className={cn(styles.ThemeSwitcher, className)}
      onClick={toggleTheme}
    >
      <div className={styles.IconContainer}>
        {theme === Theme.LIGHT ? <LightIcon /> : <DarkIcon />}
      </div>
    </Button>
  );
};
