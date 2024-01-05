import React, { FC, ReactNode, useEffect, useMemo, useState } from 'react';

import { useJsonSettings } from '@entities/User';
import { LOCAL_STORAGE_THEME_KEY, Theme } from '@shared/lib/constants/theme';
import { ThemeContext } from '@shared/lib/contexts/ThemeContext';

interface ThemeProviderProps {
  children: ReactNode;
  initialTheme?: Theme;
}

const fallbackTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme;

export const ThemeProvider: FC<ThemeProviderProps> = ({
  children,
  initialTheme,
}) => {
  const { theme: defaultTheme } = useJsonSettings();

  const [theme, setTheme] = useState<Theme>(
    initialTheme || defaultTheme || fallbackTheme || Theme.LIGHT,
  );
  const [isThemeInited, setIsThemeInited] = useState(false);

  useEffect(() => {
    if (isThemeInited || !defaultTheme) {
      return;
    }

    setTheme(defaultTheme);
    setIsThemeInited(true);
  }, [defaultTheme, isThemeInited]);

  useEffect(() => {
    document.body.className = theme;
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, theme);
  }, [theme]);

  const defaultProps = useMemo(() => ({ theme, setTheme }), [theme, setTheme]);

  return (
    <ThemeContext.Provider value={defaultProps}>
      {children}
    </ThemeContext.Provider>
  );
};
