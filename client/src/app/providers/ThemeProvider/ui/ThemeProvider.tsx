import React, { FC, ReactNode, useEffect, useMemo, useState } from 'react';

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
  const [theme, setTheme] = useState<Theme>(
    initialTheme || initialTheme || fallbackTheme || Theme.LIGHT,
  );
  const [isThemeInited, setIsThemeInited] = useState(false);

  useEffect(() => {
    if (isThemeInited || !initialTheme) {
      return;
    }

    setTheme(initialTheme);
    setIsThemeInited(true);
  }, [initialTheme, isThemeInited]);

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
