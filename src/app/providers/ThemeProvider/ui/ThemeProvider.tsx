import React, { FC, ReactNode, useEffect, useMemo, useState } from 'react';

import { useJsonSettings } from '@entities/User';
import { Theme } from '@shared/lib/constants/theme';
import { ThemeContext } from '@shared/lib/contexts/ThemeContext';

interface ThemeProviderProps {
  children: ReactNode;
  initialTheme?: Theme;
}

export const ThemeProvider: FC<ThemeProviderProps> = ({
  children,
  initialTheme,
}) => {
  const { theme: defaultTheme } = useJsonSettings();

  const [theme, setTheme] = useState<Theme>(
    initialTheme || defaultTheme || Theme.LIGHT,
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
  }, [theme]);

  const defaultProps = useMemo(() => ({ theme, setTheme }), [theme, setTheme]);

  return (
    <ThemeContext.Provider value={defaultProps}>
      {children}
    </ThemeContext.Provider>
  );
};
